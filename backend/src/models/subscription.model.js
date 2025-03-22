const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Subscription must belong to a user']
  },
  plan: {
    type: String,
    enum: ['free', 'basic', 'standard', 'premium', 'enterprise'],
    default: 'free'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'trial', 'expired', 'cancelled'],
    default: 'trial'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: () => Date.now() + 30 * 24 * 60 * 60 * 1000 // 30 days from now
  },
  trialEndsAt: Date,
  monthlyMessageLimit: {
    type: Number,
    default: 1000
  },
  messagesSent: {
    type: Number,
    default: 0
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'bank_transfer', 'none'],
    default: 'none'
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'quarterly', 'annual', 'none'],
    default: 'none'
  },
  autoRenew: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'USD'
  },
  stripeCustomerId: String,
  stripeSubscriptionId: String,
  features: {
    bulkMessaging: { type: Boolean, default: true },
    templateAccess: { type: Boolean, default: true },
    apiAccess: { type: Boolean, default: false },
    advancedAnalytics: { type: Boolean, default: false },
    prioritySupport: { type: Boolean, default: false },
    customIntegrations: { type: Boolean, default: false }
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

// Pre find middleware to populate user data
subscriptionSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  });
  next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;

