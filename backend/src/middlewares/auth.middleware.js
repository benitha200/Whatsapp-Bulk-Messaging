// src/middleware/auth.middleware.js
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { prisma } from '../../config/database.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

/**
 * Basic authentication - verifies token only
 */
export const authenticate = catchAsync(async (req, res, next) => {
    // 1) Get token and check if it exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(
            new AppError('Authentication failed. No token provided.', 401)
        );
    }

    // 2) Verify token
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return next(
            new AppError('Authentication failed. Invalid token.', 401)
        );
    }
});

/**
 * Protect routes - require authentication
 */
export const protect = catchAsync(async (req, res, next) => {
    // 1) Check if token exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(
            new AppError('You are not logged in! Please log in to get access.', 401)
        );
    }

    // 2) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    // Make sure decoded has the id property
    if (!decoded.id) {
        return next(
            new AppError('Invalid token format. Missing user ID.', 401)
        );
    }

    // 3) Check if user still exists
    const currentUser = await prisma.user.findUnique({
        where: { id: Number(decoded.id) },
        include: { subscription: true }
    });

    if (!currentUser) {
        return next(
            new AppError(
                'The user belonging to this token no longer exists.',
                401
            )
        );
    }

    // 4) Check if user changed password after the token was issued
    if (currentUser.passwordChangedAt) {
        const changedTimestamp = parseInt(
            currentUser.passwordChangedAt.getTime() / 1000,
            10
        );

        if (decoded.iat < changedTimestamp) {
            return next(
                new AppError('User recently changed password! Please log in again.', 401)
            );
        }
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
});

export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new AppError('You do not have permission to perform this action', 403)
            );
        }
        next();
    };
};

/**
 * Require email verification
 */
export const requireVerified = (req, res, next) => {
    if (!req.user.verified) {
        return next(
            new AppError('Please verify your email address to access this resource', 403)
        );
    }
    next();
};

/**
 * Require active account
 */
export const requireActive = (req, res, next) => {
    if (!req.user.active) {
        return next(
            new AppError('Your account is deactivated. Please contact support.', 403)
        );
    }
    next();
};

/**
 * Require WhatsApp Business ID
 */
export const requireWhatsappBusinessId = (req, res, next) => {
    if (!req.user.whatsappBusinessId) {
        return next(
            new AppError('Please connect your WhatsApp Business account first', 403)
        );
    }
    next();
};

/**
 * Optional authentication - doesn't throw error if not authenticated
 */
export const isLoggedIn = catchAsync(async (req, res, next) => {
    // 1) Get token if it exists
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    // If no token, just continue (user is not logged in)
    if (!token) {
        return next();
    }

    // 2) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    if (!decoded.id) {
        return next();
    }

    // 3) Check if user still exists
    const currentUser = await prisma.user.findUnique({
        where: { id: Number(decoded.id) }
    });

    if (!currentUser) {
        return next();
    }

    // 4) Check if user changed password after the token was issued
    if (currentUser.passwordChangedAt) {
        const changedTimestamp = parseInt(
            currentUser.passwordChangedAt.getTime() / 1000,
            10
        );

        if (changedTimestamp > decoded.iat) {
            return next();
        }
    }

    // User is logged in
    req.user = currentUser;
    res.locals.user = currentUser;
    return next();
});