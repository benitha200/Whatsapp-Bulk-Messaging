// import userService from '../services/user.service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import { createSendToken } from '../utils/auth.js';
import UserService from '../services/user.service.js';
const userService = new UserService();

export const getAllUsers = catchAsync(async (req, res, next) => {
  const result = await userService.getAllUsers(req.query);
  
  res.status(200).json({
    status: 'success',
    data: result.users,
    pagination: result.pagination
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const user = await userService.getUserById(req.params.id);
  
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const user = await userService.updateUser(req.params.id, req.body);
  
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

export const deactivateUser = catchAsync(async (req, res, next) => {
  await userService.deactivateUser(req.params.id);
  
  res.status(200).json({
    status: 'success',
    message: 'User deactivated successfully'
  });
});

export function getMe(req, res, next) {
  req.params.id = req.user.id;
  next();
}

export const updateMe = catchAsync(async (req, res, next) => {
  // Not allowing password updates through this route
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /updatePassword', 400));
  }
  
  const user = await userService.updateUser(req.user.id, req.body);
  
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

export const deleteMe = catchAsync(async (req, res, next) => {
  await userService.deactivateUser(req.user.id);
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

export const updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, password, passwordConfirm } = req.body;
  
  if (!currentPassword || !password || !passwordConfirm) {
    return next(new AppError('Please provide currentPassword, password and passwordConfirm', 400));
  }
  
  const user = await userService.updatePassword(
    req.user,
    currentPassword,
    password,
    passwordConfirm
  );
  
  // Log the user in with new JWT
  createSendToken(user, 200, req, res);
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  if (!req.body.email) {
    return next(new AppError('Please provide an email', 400));
  }
  
  await userService.forgotPassword(req.body.email);
  
  res.status(200).json({
    status: 'success',
    message: 'Token sent to email!'
  });
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm } = req.body;
  
  if (!password || !passwordConfirm) {
    return next(new AppError('Please provide password and passwordConfirm', 400));
  }
  
  const user = await userService.resetPassword(
    req.params.token,
    password,
    passwordConfirm
  );
  
  // Log the user in with new JWT
  createSendToken(user, 200, req, res);
});

export const sendVerificationEmail = catchAsync(async (req, res, next) => {
  await userService.sendVerificationEmail(req.user.id);
  
  res.status(200).json({
    status: 'success',
    message: 'Verification email sent!'
  });
});

export const verifyEmail = catchAsync(async (req, res, next) => {
  const user = await userService.verifyEmail(req.params.token);
  
  res.status(200).json({
    status: 'success',
    message: 'Email verified successfully',
    data: {
      user
    }
  });
});