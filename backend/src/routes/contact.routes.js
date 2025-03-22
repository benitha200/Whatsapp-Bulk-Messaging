// routes/contact.routes.js
import { Router } from 'express';
import {
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getUserContacts,
  searchContacts
} from '../controllers/contact.controller.js';
import { protect, restrictTo } from '../middlewares/auth.middleware.js';
import { logActivity } from '../middlewares/activity.middleware.js';

const router = Router();

// Protect all routes after this middleware
router.use(protect);

// Routes for current user's contacts
router.route('/')
  .post(logActivity('Create contact'), createContact)
  .get(logActivity('View all contacts'), (req, res, next) => {
    // If no userId is specified, use the current user's ID
    req.params.userId = req.user.id;
    getUserContacts(req, res, next);
  });

// Search route
router.get('/search', logActivity('Search contacts'), searchContacts);

// Routes for specific contact
router.route('/:id')
  .get(logActivity('View contact'), getContact)
  .patch(logActivity('Update contact'), updateContact)
  .delete(logActivity('Delete contact'), deleteContact);

// Admin only route to get all contacts for a specific user
router.get('/user/:userId', 
  restrictTo('admin'),
  logActivity('View user contacts'),
  getUserContacts
);

export default router;