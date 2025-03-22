const mongoose = require('mongoose');

const contactListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contact list must have a name'],
    trim: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Contact list must belong to a user']
  },
  description: String,
  contacts: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Contact'
  }],
  dynamicFilters: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  isDynamic: {
    type: Boolean,
    default: false
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

// Add virtual for contact count
contactListSchema.virtual('contactCount').get(function() {
  return this.contacts ? this.contacts.length : 0;
});

const ContactList = mongoose.model('ContactList', contactListSchema);

module.exports = ContactList;
