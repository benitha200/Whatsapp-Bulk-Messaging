const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Contact must belong to a user']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Contact must have a phone number'],
    unique: true
  },
  countryCode: {
    type: String,
    default: '+1'
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  company: String,
  title: String,
  tags: [String],
  customFields: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  optIn: {
    type: Boolean,
    default: true
  },
  optInDate: Date,
  optOutDate: Date,
  lastMessageSentAt: Date,
  lastMessageReceivedAt: Date,
  notes: String,
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

// Index for quicker searches
contactSchema.index({ phoneNumber: 1 });
contactSchema.index({ user: 1 });
contactSchema.index({ tags: 1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;