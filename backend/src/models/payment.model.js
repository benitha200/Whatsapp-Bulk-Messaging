const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Payment must belong to a user']
  },
  subscription: {
    type: mongoose.Schema.ObjectId,
    ref: 'Subscription'
  },
  amount: {
    type: Number,
    required: [true, 'Payment must have an amount']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'paypal', 'bank_transfer', 'other'],
    default: 'credit_card'
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  transactionId: String,
  paymentProcessor: {
    type: String,
    enum: ['stripe', 'paypal', 'manual', 'other'],
    default: 'stripe'
  },
  paymentDetails: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  description: String,
  billingAddress: {
    name: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  receiptUrl: String,
  invoiceNumber: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre find middleware to populate user and subscription data
paymentSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name email'
  }).populate({
    path: 'subscription',
    select: 'plan status'
  });
  next();
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
