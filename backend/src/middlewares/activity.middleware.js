// src/middleware/activity.middleware.js
import { prisma } from '../../config/database.js';
import catchAsync from '../utils/catchAsync.js';

/**
 * Track user activity - updates the lastActive timestamp
 * Should be used after authentication middleware to ensure req.user exists
 */
export const trackActivity = catchAsync(async (req, res, next) => {
    // Only track activity for authenticated users
    if (req.user && req.user.id) {
        try {
            // Update lastActive timestamp without blocking the request
            await prisma.user.update({
                where: { id: req.user.id },
                data: { lastActive: new Date() }
            });
        } catch (error) {
            // Log error but don't fail the request
            console.error('Failed to update activity timestamp:', error);
        }
    }
    
    // Continue with the request
    next();
});

/**
 * Track specific actions for analytics
 * @param {string} actionType - Type of action being performed
 */
export const trackAction = (actionType) => catchAsync(async (req, res, next) => {
    // Only track actions for authenticated users
    if (req.user && req.user.id) {
        try {
            // Create activity log entry
            await prisma.activityLog.create({
                data: {
                    userId: req.user.id,
                    actionType,
                    metadata: {
                        path: req.path,
                        method: req.method,
                        userAgent: req.headers['user-agent'],
                        ip: req.ip || req.connection.remoteAddress
                    }
                }
            });
        } catch (error) {
            // Log error but don't fail the request
            console.error(`Failed to log ${actionType} activity:`, error);
        }
    }
    
    // Continue with the request
    next();
});

/**
 * Log detailed custom activity
 * Can be called from controllers and services to log specific activities
 * @param {string} userId - User ID performing the action
 * @param {string} actionType - Type of action being performed
 * @param {string} resourceType - Type of resource being acted upon (e.g., 'user', 'post', 'payment')
 * @param {string} resourceId - ID of the resource being acted upon
 * @param {object} details - Additional details about the activity
 * @param {string} ip - IP address of the request
 * @param {string} userAgent - User agent of the request
 * @returns {Promise<object>} - The created activity log entry
 */
export const logActivity = (action) => {
    return (req, res, next) => {
      // Store original end method to intercept it
      const originalEnd = res.end;
      
      res.end = function(chunk, encoding) {
        // Call the original end method
        originalEnd.call(this, chunk, encoding);
        
        // Only log if we have a user
        const userId = req.user ? req.user.id : null;
        if (!userId && action !== 'User registered' && action !== 'User logged in') {
          return;
        }
        
        try {
          // Create the log entry after response is sent
          prisma.auditLog.create({
            data: {
              action,
              resourceType: req.originalUrl.split('/')[1] || 'auth',
              resourceId: JSON.stringify(req.params || {}),
              userId: userId || 1, // Use a default system user ID if not logged in
              ipAddress: req.ip,
              userAgent: req.headers['user-agent'],
              details: JSON.stringify({
                method: req.method,
                path: req.originalUrl,
                statusCode: res.statusCode
              })
            }
          }).catch(err => console.error('Failed to log activity:', err));
        } catch (error) {
          console.error('Failed to log activity:', error);
        }
      };
      
      next();
    };
  };

/**
 * Middleware to add logActivity helper to the request object
 * This makes it easier to log activities from controllers
 */
export const withActivityLogger = catchAsync(async (req, res, next) => {
    // Attach a helper function to the request object
    req.logActivity = async (actionType, resourceType, resourceId, details = {}) => {
        // Only proceed if we have a user
        if (!req.user || !req.user.id) return null;
        
        return await logActivity(
            req.user.id,
            actionType,
            resourceType,
            resourceId,
            details,
            req.ip || req.connection.remoteAddress,
            req.headers['user-agent']
        );
    };
    
    next();
});

/**
 * Check user inactivity period
 * Can be used to force re-login for security-sensitive operations
 * @param {number} maxInactiveMinutes - Maximum allowed inactivity in minutes
 */
export const requireRecentActivity = (maxInactiveMinutes = 30) => catchAsync(async (req, res, next) => {
    if (!req.user || !req.user.id) {
        return next(new Error('User not authenticated'));
    }
    
    // Get user with last active timestamp
    const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: { lastActive: true }
    });
    
    if (!user.lastActive) {
        return next(new Error('Please login again to continue'));
    }
    
    // Calculate inactivity period
    const lastActiveTime = new Date(user.lastActive).getTime();
    const currentTime = new Date().getTime();
    const inactiveMinutes = (currentTime - lastActiveTime) / (1000 * 60);
    
    if (inactiveMinutes > maxInactiveMinutes) {
        return next(new Error(`Session expired due to ${maxInactiveMinutes} minutes of inactivity. Please login again.`));
    }
    
    next();
});

/**
 * Append request audit data to the response
 * Useful for debugging and audit trails
 */
export const auditRequest = catchAsync(async (req, res, next) => {
    const startTime = Date.now();
    
    // Capture original end method to modify it
    const originalEnd = res.end;
    
    // Override end method
    res.end = function(chunk, encoding) {
        // Calculate request duration
        const duration = Date.now() - startTime;
        
        // Add audit data to response headers
        res.set('X-Request-Duration', `${duration}ms`);
        res.set('X-Request-ID', req.id || 'unknown');
        
        // Log activity for authenticated users
        if (req.user && req.user.id) {
            prisma.requestLog.create({
                data: {
                    userId: req.user.id,
                    path: req.path,
                    method: req.method,
                    statusCode: res.statusCode,
                    duration,
                    userAgent: req.headers['user-agent'],
                    ip: req.ip || req.connection.remoteAddress
                }
            }).catch(error => {
                console.error('Failed to log request:', error);
            });
        }
        
        // Call the original end method
        originalEnd.call(this, chunk, encoding);
    };
    
    next();
});

export default {
    trackActivity,
    trackAction,
    logActivity,
    withActivityLogger,
    requireRecentActivity,
    auditRequest
};