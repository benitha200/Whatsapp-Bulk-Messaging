const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
require('dotenv').config();

const connectDB = require('../config/database').default;
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const subscriptionRoutes = require('./routes/subscription.routes');
const billingRoutes = require('./routes/billing.routes');
const whatsappApiRoutes = require('./routes/whatsapp-api.routes');
const campaignRoutes = require('./routes/campaign.routes');
const templateRoutes = require('./routes/template.routes');
const deliveryRoutes = require('./routes/delivery.routes');
const reportRoutes = require('./routes/report.routes');
const metricRoutes = require('./routes/metric.routes');
const auditLogRoutes = require('./routes/audit-log.routes');
const ticketRoutes = require('./routes/ticket.routes');
const notificationRoutes = require('./routes/notification.routes');
const settingRoutes = require('./routes/setting.routes');
const { errorHandler } = require('./middlewares/error.middleware');

// Initialize app
const app = express();

// Connect to Database
connectDB();

// Security Middlewares
app.use(helmet()); // Set security HTTP headers
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(xss()); // Sanitize input
app.use(mongoSanitize()); // Prevent NoSQL query injection
app.use(hpp()); // Prevent HTTP param pollution

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data compression
app.use(compression());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/whatsapp', whatsappApiRoutes);
app.use('/api/v1/campaigns', campaignRoutes);
app.use('/api/v1/templates', templateRoutes);
app.use('/api/v1/delivery', deliveryRoutes);
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/metrics', metricRoutes);
app.use('/api/v1/audit-logs', auditLogRoutes);
app.use('/api/v1/tickets', ticketRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/settings', settingRoutes);

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is running' });
});

// Error handling middleware
app.use(errorHandler);

// Handle unhandled routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM signal
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});

module.exports = app;