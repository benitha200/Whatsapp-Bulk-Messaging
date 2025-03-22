// routes/campaign.routes.js
import { Router } from 'express';
import {
  createCampaign,
  getCampaign,
  updateCampaign,
  deleteCampaign,
  getUserCampaigns,
  searchCampaigns,
  updateCampaignStatus,
  scheduleCampaign,
  getCampaignAnalytics
} from '../controllers/campaign.controller.js';
import { protect, restrictTo } from '../middlewares/auth.middleware.js';
import { logActivity } from '../middlewares/activity.middleware.js';

const router = Router();

// Protect all routes after this middleware
router.use(protect);

// Routes for current user's campaigns
router.route('/')
  .post(logActivity('Create campaign'), createCampaign)
  .get(logActivity('View all campaigns'), (req, res, next) => {
    // If no userId is specified, use the current user's ID
    req.params.userId = req.user.id;
    getUserCampaigns(req, res, next);
  });

// Search route
router.get('/search', logActivity('Search campaigns'), searchCampaigns);

// Campaign analytics
router.get('/:id/analytics', logActivity('View campaign analytics'), getCampaignAnalytics);

// Update campaign status
router.patch('/:id/status', logActivity('Update campaign status'), updateCampaignStatus);

// Schedule campaign
router.patch('/:id/schedule', logActivity('Schedule campaign'), scheduleCampaign);

// Routes for specific campaign
router.route('/:id')
  .get(logActivity('View campaign'), getCampaign)
  .patch(logActivity('Update campaign'), updateCampaign)
  .delete(logActivity('Delete campaign'), deleteCampaign);

// Admin only route to get all campaigns for a specific user
router.get('/user/:userId',
  restrictTo('admin'),
  logActivity('View user campaigns'),
  getUserCampaigns
);

export default router;