// controllers/auth.controller.js
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { prisma } from '../../config/database.js';
import catchAsync from '../utils/catchAsync.js';
// import {AppError} from '../utils/appError.js';
import { createSendToken } from '../utils/auth.js';
// import userService from '../services/user.service.js';
import UserService from '../services/user.service.js';

import AppError from '../utils/appError.js';
import crypto from 'crypto';

const userService = new UserService();
/**
 * User signup
 */
export const signup = catchAsync(async (req, res, next) => {
    const { name, email, password, passwordConfirm } = req.body;
  
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
  
    if (existingUser) {
      return next(new AppError('Email already in use', 400));
    }
  
    // Create new user
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        passwordChangedAt: new Date(),
        role: 'user'
      }
    });
  
    // Remove password from output
    newUser.password = undefined;
  
    // Try to send verification email, but don't fail if it doesn't work
    try {
      await userService.sendVerificationEmail(newUser.id);
    } catch (err) {
      console.error('Failed to send verification email:', err);
      // Continue with signup process even if email fails
    }
  
    // Create and send token
    createSendToken(newUser, 201, req, res);
  });

export const register = signup;

export const forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on posted email
    const user = await prisma.user.findUnique({
      where: { email: req.body.email }
    });
    
    if (!user) {
      return next(new AppError('There is no user with that email address', 404));
    }
  
    // 2) Generate the random reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
  
    const passwordResetExpires = new Date(
      Date.now() + 10 * 60 * 1000 // 10 minutes
    );
  
    // 3) Save the reset token to the database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken,
        passwordResetExpires
      }
    });
  
    // 4) Send it to user's email
    try {
      const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/api/v1/users/resetPassword/${resetToken}`;
      
      await userService.sendPasswordResetEmail(user.email, resetURL);
  
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!'
      });
    } catch (err) {
      // If there's an error sending the email, remove the reset token
      await prisma.user.update({
        where: { id: user.id },
        data: {
          passwordResetToken: null,
          passwordResetExpires: null
        }
      });
  
      return next(
        new AppError('There was an error sending the email. Try again later!', 500)
      );
    }
  });

/**
 * User login
 */
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  // Check if user exists && password is correct
  const user = await prisma.user.findUnique({
    where: { email },
    include: { subscription: true }
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // Check if user is active
  if (!user.active) {
    return next(new AppError('Your account has been deactivated', 401));
  }

  // Create and send token
  createSendToken(user, 200, req, res);
});

/**
 * User logout
 */
export const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  
  res.status(200).json({ status: 'success' });
};

/**
 * Protect routes - authentication middleware
 */
export const protect = catchAsync(async (req, res, next) => {
  // 1) Get token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }

  // 2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const user = await prisma.user.findUnique({
    where: { id: decoded.id },
    include: { subscription: true }
  });

  if (!user) {
    return next(
      new AppError('The user belonging to this token no longer exists', 401)
    );
  }

  // 4) Check if user changed password after the token was issued
  const passwordChangedAfter = user.passwordChangedAt 
    ? user.passwordChangedAt.getTime() / 1000 > decoded.iat
    : false;

  if (passwordChangedAfter) {
    return next(
      new AppError('User recently changed password! Please log in again', 401)
    );
  }

  // 5) Check if user is active
  if (!user.active) {
    return next(new AppError('Your account has been deactivated', 401));
  }

  // Grant access to protected route
  req.user = user;
  res.locals.user = user;
  next();
});

/**
 * Restrict access to certain roles
 */
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
 * Optional authentication - doesn't throw error if not authenticated
 */
export const optionalAuth = catchAsync(async (req, res, next) => {
  // 1) Get token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next();
  }

  try {
    // 2) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: { subscription: true }
    });

    if (!user || !user.active) {
      return next();
    }

    // 4) Check if user changed password after the token was issued
    const passwordChangedAfter = user.passwordChangedAt 
      ? user.passwordChangedAt.getTime() / 1000 > decoded.iat
      : false;

    if (passwordChangedAfter) {
      return next();
    }

    // Set user on request object
    req.user = user;
    res.locals.user = user;
    next();
  } catch (err) {
    next();
  }
});

/**
 * Check if user is verified
 */
export const isVerified = catchAsync(async (req, res, next) => {
  if (!req.user.verified) {
    return next(
      new AppError('Please verify your email address to access this resource', 403)
    );
  }
  next();
});

/**
 * Reset password with token
 */
export const resetPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
  
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: hashedToken,
        passwordResetExpires: {
          gt: new Date()
        }
      }
    });
  
    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }
  
    // 3) Update password and remove reset token fields
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
        passwordChangedAt: new Date()
      }
    });
  
    // 4) Log the user in, send JWT
    createSendToken(user, 200, req, res);
  });
  
  /**
   * Verify email address with token
   */
  export const verifyEmail = catchAsync(async (req, res, next) => {
    // 1) Get token from params
    const { token } = req.params;
    
    // 2) Find verification entry
    const verification = await prisma.emailVerification.findUnique({
      where: { token }
    });
  
    if (!verification || verification.expiresAt < new Date()) {
      return next(new AppError('Verification token is invalid or has expired', 400));
    }
  
    // 3) Update user verification status
    await prisma.user.update({
      where: { id: verification.userId },
      data: { verified: true }
    });
  
    // 4) Delete verification record
    await prisma.emailVerification.delete({
      where: { id: verification.id }
    });
  
    res.status(200).json({
      status: 'success',
      message: 'Email verified successfully!'
    });
  });
  
  /**
   * Update current user password
   */
  export const updatePassword = catchAsync(async (req, res, next) => {
    // 1) Get user from collection
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }
    });
  
    // 2) Check if posted current password is correct
    if (!(await bcrypt.compare(req.body.passwordCurrent, user.password))) {
      return next(new AppError('Your current password is incorrect', 401));
    }
  
    // 3) Update password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordChangedAt: new Date()
      }
    });
  
    // 4) Log user in, send JWT
    createSendToken(user, 200, req, res);
  });
  
  // Note: sendVerificationEmail is in userService, but you can export it as a controller function
  export const sendVerificationEmail = catchAsync(async (req, res, next) => {
    // Get user ID from authenticated user
    const userId = req.user.id;
    
    // Call the service function
    await userService.sendVerificationEmail(userId);
    
    res.status(200).json({
      status: 'success',
      message: 'Verification email sent!'
    });
  });