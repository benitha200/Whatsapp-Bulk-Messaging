const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Notification must belong to a user']
  },
  title: {
    type: String,
    required: [true, 'Notification must have a title']
  },
  message: {
    type: String,
    required: [true, 'Notification must have a message']
  },
  type: {
    type: String,
    enum: ['info', 'success', 'warning', 'error', 'system'],
    default: 'info'
  },
  read: {
    type: Boolean,
    default: false
  },
  relatedResource: {
    type: String,
    enum: ['user', 'campaign', 'template', 'message', 'subscription', 'payment', 'ticket', 'system', 'other'],
    default: 'other'
  },
  relatedResourceId: mongoose.Schema.Types.Mixed,
  link: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for quicker queries
notificationSchema.index({ user: 1, read: 1 });
notificationSchema.index({ createdAt: -1 });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;