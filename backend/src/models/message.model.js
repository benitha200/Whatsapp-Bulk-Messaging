const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  campaign: {
    type: mongoose.Schema.ObjectId,
    ref: 'Campaign'
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Message must belong to a user']
  },
  contact: {
    type: mongoose.Schema.ObjectId,
    ref: 'Contact',
    required: [true, 'Message must be sent to a contact']
  },
  template: {
    type: mongoose.Schema.ObjectId,
    ref: 'Template'
  },
  content: {
    type: String,
    required: [true, 'Message must have content']
  },
  originalContent: String,
  variables: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  attachments: [{
    name: String,
    type: String,
    url: String,
    size: Number
  }],
  status: {
    type: String,
    enum: ['queued', 'sent', 'delivered', 'read', 'failed'],
    default: 'queued'
  },
  sentAt: Date,
  deliveredAt: Date,
  readAt: Date,
  failedAt: Date,
  errorMessage: String,
  whatsappMessageId: String,
  isManualSend: {
    type: Boolean,
    default: false
  },
  cost: {
    type: Number,
    default: 0
  },
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

// Indexes for quicker querying
messageSchema.index({ user: 1, contact: 1 });
messageSchema.index({ campaign: 1 });
messageSchema.index({ status: 1 });
messageSchema.index({ sentAt: 1 });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;