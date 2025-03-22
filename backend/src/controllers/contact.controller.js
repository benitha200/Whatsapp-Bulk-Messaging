// controllers/contact.controller.js
import ContactService from '../services/contact.service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

export const createContact = catchAsync(async (req, res, next) => {
  // Add the userId from the authenticated user
  req.body.userId = req.user.id;
  
  const contact = await ContactService.createContact(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      contact
    }
  });
});

export const getContact = catchAsync(async (req, res, next) => {
  const contact = await ContactService.getContactById(req.params.id);
  if (!contact) {
    return next(new AppError('No contact found with that ID', 404));
  }
  
  // Check if the contact belongs to the current user
  if (contact.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to access this contact', 403));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      contact
    }
  });
});

export const updateContact = catchAsync(async (req, res, next) => {
  // First check if contact exists and belongs to user
  const existingContact = await ContactService.getContactById(req.params.id);
  if (!existingContact) {
    return next(new AppError('No contact found with that ID', 404));
  }
  
  if (existingContact.userId !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You do not have permission to update this contact', 403));
  }
  
  const contact = await ContactService.updateContact(req.params.id, req.body);
  
  res.status(200).json({
    status: 'success',
    data: {
      contact
    }
  });
});

export const deleteContact = catchAsync(async (req, res, next) => {
    // First check if contact exists and belongs to user
    const existingContact = await ContactService.getContactById(req.params.id);
    if (!existingContact) {
      return next(new AppError('No contact found with that ID', 404));
    }
    
    if (existingContact.userId !== req.user.id && req.user.role !== 'admin') {
      return next(new AppError('You do not have permission to delete this contact', 403));
    }
    
    await ContactService.deleteContact(req.params.id);
    
    // Changed from 204 to 200 to include message in response body
    res.status(200).json({
      status: 'success',
      message: 'Contact successfully deleted'
    });
  });

export const getUserContacts = catchAsync(async (req, res, next) => {
  // If userId param is provided, check permission
  const userId = req.params.userId || req.user.id;
  
  if (parseInt(userId) !== req.user.id && req.user.role !== 'admin') {
    return next(new AppError('You can only access your own contacts', 403));
  }
  
  const contacts = await ContactService.getContactsByUser(userId);
  
  res.status(200).json({
    status: 'success',
    results: contacts.length,
    data: {
      contacts
    }
  });
});

export const searchContacts = catchAsync(async (req, res, next) => {
  if (!req.query.q) {
    return next(new AppError('Please provide a search query', 400));
  }
  
  const contacts = await ContactService.searchContacts(req.query.q, req.user.id);
  
  res.status(200).json({
    status: 'success',
    results: contacts.length,
    data: {
      contacts
    }
  });
});