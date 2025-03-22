const mongoose = require('mongoose');
const crypto = require('crypto');

const apiKeySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'API key must belong to a user']
  },
  name: {
    type: String,
    required: [true, 'API key must have a name']
  },
  key: {
    type: String,
    required: [true, 'API key must have a key value'],
    unique: true
  },
  permissions: {
    sendMessages: { type: Boolean, default: true },
    readContacts: { type: Boolean, default: true },
    writeContacts: { type: Boolean, default: true },
    readTemplates: { type: Boolean, default: true },
    writeTemplates: { type: Boolean, default: false },
    readCampaigns: { type: Boolean, default: true },
    writeCampaigns: { type: Boolean, default: false }
  },
  ipRestrictions: [String],
  lastUsed: Date,
  active: {
    type: Boolean,
    default: true
  },
  expiresAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate a new API key
apiKeySchema.statics.generateKey = function() {
  return `wba_${crypto.randomBytes(32).toString('hex')}`;
};

// Mask the API key in responses
apiKeySchema.methods.maskKey = function() {
  if (!this.key) return null;
  const prefix = this.key.substring(0, 6);
  const suffix = this.key.substring(this.key.length - 4);
  return `${prefix}...${suffix}`;
};

// Pre find middleware to populate user data
apiKeySchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  });
  next();
});

const APIKey = mongoose.model('APIKey', apiKeySchema);

module.exports = APIKey;
