const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A campaign must have a name'],
    trim: true,
    maxlength: [100, 'A campaign name must have less or equal than 100 characters']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Campaign must belong to a user']
  },
  status: {
    type: String,
    enum: ['draft', 'pending_approval', 'approved', 'rejected', 'scheduled', 'in_progress', 'paused', 'completed', 'cancelled'],
    default: 'draft'
  },
  template: {
    type: mongoose.Schema.ObjectId,
    ref: 'Template',
    required: [true, 'Campaign must use a template']
  },
  schedule: {
    startDate: Date,
    endDate: Date,
    timeSlotsEnabled: { type: Boolean, default: false },
    timeSlots: [{
      startTime: String, // e.g., "09:00"
      endTime: String    // e.g., "17:00"
    }],
    timezone: { type: String, default: 'UTC' }
  },
  audience: {
    contactLists: [{
      type: mongoose.Schema.ObjectId,
      ref: 'ContactList'
    }],
    filters: {
      tags: [String],
      customFilters: mongoose.Schema.Types.Mixed
    },
    estimatedReach: Number
  },
  messageVariables: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  attachments: [{
    name: String,
    type: String,
    url: String,
    size: Number
  }],
  analytics: {
    delivered: { type: Number, default: 0 },
    read: { type: Number, default: 0 },
    replied: { type: Number, default: 0 },
    failed: { type: Number, default: 0 },
    clickThrough: { type: Number, default: 0 }
  },
  notes: String,
  reviewNotes: String,
  rejectionReason: String,
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

// Pre find middleware to populate related data
campaignSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  }).populate({
    path: 'template',
    select: 'name content'
  });
  next();
});

// Add virtual for message delivery progress
campaignSchema.virtual('progress').get(function() {
  if (!this.audience.estimatedReach) return 0;
  const total = this.analytics.delivered + this.analytics.failed;
  return Math.round((total / this.audience.estimatedReach) * 100);
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
