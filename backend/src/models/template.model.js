const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Template must have a name'],
    trim: true
  },
  category: {
    type: String,
    enum: ['marketing', 'transactional', 'notification', 'service', 'other'],
    default: 'marketing'
  },
  content: {
    type: String,
    required: [true, 'Template must have content']
  },
  variables: [String], // List of variable placeholders in the template
  headerType: {
    type: String,
    enum: ['none', 'text', 'image', 'video', 'document'],
    default: 'none'
  },
  headerContent: {
    text: String,
    mediaUrl: String
  },
  footerText: String,
  callToAction: {
    enabled: { type: Boolean, default: false },
    buttons: [{
      type: { type: String, enum: ['url', 'phone', 'quick_reply'] },
      text: String,
      value: String
    }]
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'approved', 'rejected'],
    default: 'draft'
  },
  whatsappApproved: {
    type: Boolean,
    default: false
  },
  whatsappTemplateId: String,
  whatsappTemplateNamespace: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Template must belong to a user']
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: 'en'
  },
  usageCount: {
    type: Number,
    default: 0
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Pre find middleware to populate user data
templateSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  });
  next();
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
