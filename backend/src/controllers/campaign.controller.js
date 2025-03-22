// controllers/campaign.controller.js
import CampaignService from '../services/campaign.service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const createCampaign = catchAsync(async (req, res, next) => {
  // Add the userId from the authenticated user
  req.body.userId = req.user.id;
  
  const campaign = await CampaignService.createCampaign(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      campaign
    }
  });
});

export const getCampaign = catchAsync(async (req, res, next) => {
  const campaign = await CampaignService.getCampaignById(req.params.id);
  if (!campaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  // Check if the campaign belongs to the current user
  if (campaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to access this campaign', 403));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      campaign
    }
  });
});

export const updateCampaign = catchAsync(async (req, res, next) => {
  // First check if campaign exists and belongs to user
  const existingCampaign = await CampaignService.getCampaignById(req.params.id);
  if (!existingCampaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  if (existingCampaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update this campaign', 403));
  }
  
  const campaign = await CampaignService.updateCampaign(req.params.id, req.body);
  
  res.status(200).json({
    status: 'success',
    data: {
      campaign
    }
  });
});

export const deleteCampaign = catchAsync(async (req, res, next) => {
  // First check if campaign exists and belongs to user
  const existingCampaign = await CampaignService.getCampaignById(req.params.id);
  if (!existingCampaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  if (existingCampaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to delete this campaign', 403));
  }
  
  await CampaignService.deleteCampaign(req.params.id);
  
  res.status(200).json({
    status: 'success',
    message: 'Campaign successfully deleted'
  });
});

export const getUserCampaigns = catchAsync(async (req, res, next) => {
  // If userId param is provided, check permission
  const userId = req.params.userId || req.user.id;
  
  if (parseInt(userId) !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You can only access your own campaigns', 403));
  }
  
  const campaigns = await CampaignService.getCampaignsByUser(userId);
  
  res.status(200).json({
    status: 'success',
    results: campaigns.length,
    data: {
      campaigns
    }
  });
});

export const searchCampaigns = catchAsync(async (req, res, next) => {
  if (!req.query.q) {
    return next(new AppError('Please provide a search query', 400));
  }
  
  const campaigns = await CampaignService.searchCampaigns(req.query.q, req.user.id);
  
  res.status(200).json({
    status: 'success',
    results: campaigns.length,
    data: {
      campaigns
    }
  });
});

export const updateCampaignStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  
  if (!status) {
    return next(new AppError('Status is required', 400));
  }
  
  // Valid status values
  const validStatuses = ['draft', 'review', 'approved', 'scheduled', 'active', 'paused', 'completed', 'rejected'];
  if (!validStatuses.includes(status)) {
    return next(new AppError(`Status must be one of: ${validStatuses.join(', ')}`, 400));
  }
  
  // First check if campaign exists and belongs to user
  const existingCampaign = await CampaignService.getCampaignById(id);
  if (!existingCampaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  if (existingCampaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update this campaign', 403));
  }
  
  const campaign = await CampaignService.updateCampaignStatus(id, status);
  
  res.status(200).json({
    status: 'success',
    data: {
      campaign
    }
  });
});

export const scheduleCampaign = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { schedule } = req.body;
  
  if (!schedule) {
    return next(new AppError('Schedule data is required', 400));
  }
  
  // First check if campaign exists and belongs to user
  const existingCampaign = await CampaignService.getCampaignById(id);
  if (!existingCampaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  if (existingCampaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to schedule this campaign', 403));
  }
  
  const campaign = await CampaignService.scheduleCampaign(id, schedule);
  
  res.status(200).json({
    status: 'success',
    data: {
      campaign
    }
  });
});

export const getCampaignAnalytics = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  // First check if campaign exists and belongs to user
  const existingCampaign = await CampaignService.getCampaignById(id);
  if (!existingCampaign) {
    return next(new AppError('No campaign found with that ID', 404));
  }
  
  if (existingCampaign.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to access this campaign', 403));
  }
  
  const analytics = await CampaignService.getCampaignAnalytics(id);
  
  res.status(200).json({
    status: 'success',
    data: {
      analytics
    }
  });
});