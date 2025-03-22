// routes/auth.routes.js
import { Router } from 'express';
import { register, login, forgotPassword, resetPassword, sendVerificationEmail, verifyEmail, logout, updatePassword } from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { logActivity } from '../middlewares/activity.middleware.js';

const router = Router();

// Public routes (no authentication required)
router.post('/register', logActivity('User registered'), register);
router.post('/login', logActivity('User logged in'), login);
router.post('/forgot-password', logActivity('Password reset requested'), forgotPassword);
router.patch('/reset-password/:token', logActivity('Password reset'), resetPassword);
router.get('/verify-email/:token', logActivity('Email verified'), verifyEmail);
router.post('/send-verification', logActivity('Email verification requested'), sendVerificationEmail);

// Protected routes (authentication required)
router.use(authenticate); // Apply authentication middleware to all routes below
router.post('/logout', logActivity('User logged out'), logout);
router.patch('/update-password', logActivity('Password updated'), updatePassword);

export default router;