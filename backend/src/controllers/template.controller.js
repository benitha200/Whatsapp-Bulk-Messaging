// controllers/template.controller.js
import TemplateService from '../services/template.service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const createTemplate = catchAsync(async (req, res, next) => {
  // Add the userId from the authenticated user
  req.body.userId = req.user.id;
  
  const template = await TemplateService.createTemplate(req.body);
  
  res.status(201).json({
    status: 'success',
    data: {
      template
    }
  });
});

export const getTemplate = catchAsync(async (req, res, next) => {
  const template = await TemplateService.getTemplateById(req.params.id);
  
  if (!template) {
    return next(new AppError('No template found with that ID', 404));
  }
  
  // Check if the template belongs to the current user or is public
  if (template.userId !== req.user.id && !template.isPublic && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to access this template', 403));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      template
    }
  });
});

export const updateTemplate = catchAsync(async (req, res, next) => {
  // First check if template exists and belongs to user
  const existingTemplate = await TemplateService.getTemplateById(req.params.id);
  
  if (!existingTemplate) {
    return next(new AppError('No template found with that ID', 404));
  }
  
  if (existingTemplate.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update this template', 403));
  }
  
  // If it's already approved, restrict which fields can be updated
  if (existingTemplate.whatsappApproved && req.user.role !== 'admin') {
    const allowedFields = ['name', 'isPublic', 'tags'];
    
    Object.keys(req.body).forEach(key => {
      if (!allowedFields.includes(key)) {
        delete req.body[key];
      }
    });
    
    if (Object.keys(req.body).length === 0) {
      return next(new AppError('Approved templates can only have their name, public status, and tags updated', 400));
    }
  }
  
  const template = await TemplateService.updateTemplate(req.params.id, req.body);
  
  res.status(200).json({
    status: 'success',
    data: {
      template
    }
  });
});

export const deleteTemplate = catchAsync(async (req, res, next) => {
  // First check if template exists and belongs to user
  const existingTemplate = await TemplateService.getTemplateById(req.params.id);
  
  if (!existingTemplate) {
    return next(new AppError('No template found with that ID', 404));
  }
  
  if (existingTemplate.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to delete this template', 403));
  }
  
  // Check if the template is being used in any active campaigns
  // This would require a new service method
  
  await TemplateService.deleteTemplate(req.params.id);
  
  res.status(200).json({
    status: 'success',
    message: 'Template successfully deleted'
  });
});

export const getUserTemplates = catchAsync(async (req, res, next) => {
  // If userId param is provided, check permission
  const userId = req.params.userId || req.user.id;
  
  if (parseInt(userId) !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You can only access your own templates', 403));
  }
  
  const templates = await TemplateService.getTemplatesByUser(userId);
  
  res.status(200).json({
    status: 'success',
    results: templates.length,
    data: {
      templates
    }
  });
});

export const searchTemplates = catchAsync(async (req, res, next) => {
  if (!req.query.q) {
    return next(new AppError('Please provide a search query', 400));
  }
  
  const templates = await TemplateService.searchTemplates(req.query.q, req.user.id);
  
  res.status(200).json({
    status: 'success',
    results: templates.length,
    data: {
      templates
    }
  });
});

export const getPublicTemplates = catchAsync(async (req, res, next) => {
  const templates = await TemplateService.getPublicTemplates();
  
  res.status(200).json({
    status: 'success',
    results: templates.length,
    data: {
      templates
    }
  });
});

export const getTemplatesByCategory = catchAsync(async (req, res, next) => {
  const { category } = req.params;
  
  if (!category) {
    return next(new AppError('Please provide a category', 400));
  }
  
  const templates = await TemplateService.getTemplatesByCategory(category, req.user.id);
  
  res.status(200).json({
    status: 'success',
    results: templates.length,
    data: {
      templates
    }
  });
});

export const submitForWhatsappApproval = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const whatsappData = req.body;
  
  // First check if template exists and belongs to user
  const existingTemplate = await TemplateService.getTemplateById(id);
  
  if (!existingTemplate) {
    return next(new AppError('No template found with that ID', 404));
  }
  
  if (existingTemplate.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to submit this template', 403));
  }
  
  if (existingTemplate.status !== 'draft') {
    return next(new AppError('Only draft templates can be submitted for approval', 400));
  }
  
  // Here you would typically have some logic to submit to WhatsApp Business API
  // For now we'll just update the status
  
  const template = await TemplateService.submitForWhatsappApproval(id, whatsappData);
  
  res.status(200).json({
    status: 'success',
    data: {
      template
    }
  });
});

export const updateWhatsappApprovalStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { isApproved } = req.body;
  
  // This endpoint would typically be protected by admin-only access
  if (req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update approval status', 403));
  }
  
  if (isApproved === undefined) {
    return next(new AppError('Please provide approval status', 400));
  }
  
  const template = await TemplateService.updateWhatsappApprovalStatus(id, isApproved);
  
  res.status(200).json({
    status: 'success',
    data: {
      template
    }
  });
});

export const cloneTemplate = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  
  // Check if source template exists
  const existingTemplate = await TemplateService.getTemplateById(id);
  
  if (!existingTemplate) {
    return next(new AppError('No template found with that ID', 404));
  }
  
  // Check if user has permission to view the source template
  if (existingTemplate.userId !== req.user.id && !existingTemplate.isPublic && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to clone this template', 403));
  }
  
  const template = await TemplateService.cloneTemplate(id, req.user.id);
  
  res.status(201).json({
    status: 'success',
    data: {
      template
    }
  });
});