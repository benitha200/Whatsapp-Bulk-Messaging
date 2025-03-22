const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Audit log must belong to a user']
  },
  action: {
    type: String,
    required: [true, 'Audit log must have an action'],
    enum: ['create', 'read', 'update', 'delete', 'login', 'logout', 'password_change', 'api_key_generated', 'campaign_submitted', 'campaign_approved', 'campaign_rejected', 'payment_processed', 'subscription_changed', 'other']
  },
  resourceType: {
    type: String,
    required: [true, 'Audit log must have a resource type'],
    enum: ['user', 'campaign', 'template', 'contact', 'contactList', 'message', 'ticket', 'subscription', 'payment', 'setting', 'api_key', 'other']
  },
  resourceId: mongoose.Schema.Types.Mixed,
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  ipAddress: String,
  userAgent: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre find middleware to populate user data
auditLogSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  });
  next();
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

module.exports = AuditLog;
