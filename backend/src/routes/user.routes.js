// routes/user.routes.js
import { Router } from 'express';
import { 
  getMe, 
  getUser, 
  updateMe, 
  deleteMe, 
  getAllUsers, 
  updateUser, 
  deleteUser, 
  deactivateUser 
} from '../controllers/user.controller.js';
import { protect, restrictTo } from '../middlewares/auth.middleware.js';
import { logActivity } from '../middlewares/activity.middleware.js';

const router = Router();

// Protect all routes after this middleware
router.use(protect);

// Logged-in user routes
router.get('/me', logActivity('View profile'), getMe, getUser);
router.patch('/updateMe', logActivity('Update profile'), updateMe);
router.delete('/deleteMe', logActivity('Delete account'), deleteMe);

// Admin-only routes
router.use(restrictTo('admin'));
router.get('/', logActivity('List all users'), getAllUsers);
router.get('/:id', logActivity('View user'), getUser);
router.patch('/:id', logActivity('Update user'), updateUser);
router.delete('/:id', logActivity('Delete user'), deleteUser);
router.patch('/:id/deactivate', logActivity('Deactivate user'), deactivateUser);

export default router;