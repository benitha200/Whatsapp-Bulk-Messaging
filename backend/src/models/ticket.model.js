const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Ticket must have a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Ticket must have a description']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Ticket must belong to a user']
  },
  assignedTo: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['open', 'in_progress', 'waiting_on_client', 'resolved', 'closed'],
    default: 'open'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  category: {
    type: String,
    enum: ['account', 'billing', 'technical', 'feature_request', 'whatsapp_api', 'template_approval', 'other'],
    default: 'other'
  },
  attachments: [{
    name: String,
    type: String,
    url: String,
    size: Number
  }],
  comments: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    message: String,
    createdAt: { type: Date, default: Date.now }
  }],
  relatedTickets: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Ticket'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  closedAt: Date,
  resolvedAt: Date
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Pre find middleware to populate related data
ticketSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  }).populate({
    path: 'assignedTo',
    select: 'name email'
  }).populate({
    path: 'comments.user',
    select: 'name email role'
  });
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
