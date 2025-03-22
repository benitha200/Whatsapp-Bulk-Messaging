const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  key: {
    type: String,
    required: [true, 'Setting must have a key'],
    unique: true
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Setting must have a value']
  },
  isSystem: {
    type: Boolean,
    default: false
  },
  isGlobal: {
    type: Boolean,
    default: false
  },
  description: String,
  group: {
    type: String,
    enum: ['general', 'whatsapp', 'notifications', 'security', 'billing', 'api', 'templates', 'campaigns', 'other'],
    default: 'general'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create compound index for user and key
settingSchema.index({ user: 1, key: 1 }, { unique: true });

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;