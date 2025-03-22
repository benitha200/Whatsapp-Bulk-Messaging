// workers/campaign.worker.js
const { queue } = require('../../config/bull');
const Campaign = require('../models/campaign.model');
const Message = require('../models/message.model');
const { whatsappService } = require('../services/whatsapp.service');
const { updateCampaignStats } = require('../services/campaign.service');
const { updateUserQuota } = require('../services/subscription.service');
const logger = require('../utils/logger');

// Process campaign messages
queue.process('processCampaign', async (job) => {
  const { 
    campaignId, 
    userId, 
    recipients, 
    messageType, 
    messageBody, 
    mediaUrl, 
    mediaType, 
    template, 
    schedule 
  } = job.data;
  
  logger.info(`Processing campaign ${campaignId} with ${recipients.length} recipients`);
  
  // Check if there's a schedule and it's in the future
  if (schedule && new Date(schedule) > new Date()) {
    // Reschedule the job
    const delay = new Date(schedule) - new Date();
    await queue.add('processCampaign', job.data, { 
      delay,
      jobId: `campaign:${campaignId}:scheduled`
    });
    logger.info(`Campaign ${campaignId} scheduled for ${schedule}`);
    return { status: 'scheduled' };
  }
  
  // Process each recipient
  for (const recipient of recipients) {
    try {
      // Check if campaign is still active
      const campaign = await Campaign.findById(campaignId);
      if (!campaign || campaign.status !== 'running') {
        logger.info(`Campaign ${campaignId} is no longer running. Stopping processing.`);
        break;
      }
      
      // Add delay between messages to avoid rate limiting
      // WhatsApp has rate limits that must be respected
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let messageResponse;
      
      // Send message based on type
      if (messageType === 'text') {
        messageResponse = await whatsappService.sendTextMessage({
          to: recipient.phoneNumber,
          body: personalizeMessage(messageBody, recipient),
          userId
        });
      } else if (messageType === 'template') {
        // Replace template components with personalized data if needed
        const personalizedComponents = template.components.map(component => {
          if (component.type === 'body' && component.parameters) {
            return {
              ...component,
              parameters: component.parameters.map(param => {
                if (param.type === 'text') {
                  return {
                    ...param,
                    text: personalizeMessage(param.text, recipient)
                  };
                }
                return param;
              })
            };
          }
          return component;
        });
        
        messageResponse = await whatsappService.sendTemplateMessage({
          to: recipient.phoneNumber,
          templateName: template.name,
          templateLanguage: template.language,
          components: personalizedComponents,
          userId
        });
      } else if (['image', 'video', 'audio', 'document'].includes(messageType)) {
        messageResponse = await whatsappService.sendMediaMessage({
          to: recipient.phoneNumber,
          mediaType,
          mediaUrl,
          caption: messageType !== 'audio' ? personalizeMessage(messageBody, recipient) : '',
          userId
        });
      }
      
      // Save message to database
      await Message.create({
        campaignId,
        recipient: recipient.contactId,
        whatsappMessageId: messageResponse.messages[0].id,
        messageType,
        status: 'sent',
        user: userId
      });
      
      // Update campaign stats
      await updateCampaignStats(campaignId, { sent: true });
      
      // Update user quota
      await updateUserQuota(userId, 1, 'decrement');
      
      logger.info(`Message sent to ${recipient.phoneNumber} for campaign ${campaignId}`);
    } catch (error) {
      logger.error(`Failed to send message to ${recipient.phoneNumber}:`, error);
      
      // Record the failure
      await updateCampaignStats(campaignId, { failed: true });
      
      // Save failed message to database
      await Message.create({
        campaignId,
        recipient: recipient.contactId,
        messageType,
        status: 'failed',
        error: error.message,
        user: userId
      });
    }
  }
  
// Check if all messages have been processed
const campaign = await Campaign.findById(campaignId);
const totalProcessed = (campaign.sentCount || 0) + (campaign.failedCount || 0);

if (totalProcessed >= campaign.totalRecipients) {
  // Update campaign status to completed
  await Campaign.findByIdAndUpdate(campaignId, {
    status: 'completed',
    completedAt: new Date()
  });
  
  logger.info(`Campaign ${campaignId} completed. Total sent: ${campaign.sentCount}, Failed: ${campaign.failedCount}`);
}

return { status: 'completed' };
});

// Helper function to personalize message with recipient data
function personalizeMessage(message, recipient) {
if (!message) return '';

return message
  .replace(/{{firstName}}/g, recipient.firstName || '')
  .replace(/{{lastName}}/g, recipient.lastName || '')
  .replace(/{{fullName}}/g, `${recipient.firstName || ''} ${recipient.lastName || ''}`.trim())
  .replace(/{{phone}}/g, recipient.phoneNumber || '');
}

// Process webhook events from WhatsApp
queue.process('processWebhook', async (job) => {
const { body } = job.data;

try {
  // Process different webhook types
  if (body.object === 'whatsapp_business_account') {
    if (body.entry && body.entry.length > 0) {
      for (const entry of body.entry) {
        if (entry.changes && entry.changes.length > 0) {
          for (const change of entry.changes) {
            if (change.value && change.value.messages && change.value.messages.length > 0) {
              // Process incoming messages
              await processIncomingMessages(change.value.messages);
            }
            
            if (change.value && change.value.statuses && change.value.statuses.length > 0) {
              // Process status updates
              await processStatusUpdates(change.value.statuses);
            }
          }
        }
      }
    }
  }
  
  return { success: true };
} catch (error) {
  logger.error('Error processing webhook:', error);
  return { success: false, error: error.message };
}
});

// Process incoming messages from WhatsApp
async function processIncomingMessages(messages) {
for (const message of messages) {
  try {
    // Mark message as read to improve user experience
    await whatsappService.markAsRead(message.id);
    
    // Store the message in database
    await Message.create({
      whatsappMessageId: message.id,
      from: message.from,
      messageType: message.type,
      text: message.text?.body,
      media: message.image?.id || message.video?.id || message.audio?.id || message.document?.id,
      timestamp: new Date(parseInt(message.timestamp) * 1000),
      status: 'received',
      direction: 'incoming'
    });
    
    logger.info(`Incoming message received from ${message.from}`);
  } catch (error) {
    logger.error(`Failed to process incoming message ${message.id}:`, error);
  }
}
}

// Process status updates from WhatsApp
async function processStatusUpdates(statuses) {
for (const status of statuses) {
  try {
    // Find the message in our database
    const message = await Message.findOne({ whatsappMessageId: status.id });
    
    if (!message) {
      logger.warn(`Status update received for unknown message ${status.id}`);
      continue;
    }
    
    // Update message status
    await Message.findByIdAndUpdate(message._id, {
      status: status.status,
      deliveredAt: status.status === 'delivered' ? new Date() : message.deliveredAt,
      readAt: status.status === 'read' ? new Date() : message.readAt
    });
    
    // Update campaign stats if this message is part of a campaign
    if (message.campaignId) {
      const statsUpdate = {
        delivered: status.status === 'delivered',
        read: status.status === 'read'
      };
      
      await updateCampaignStats(message.campaignId, statsUpdate);
    }
    
    logger.info(`Message ${status.id} status updated to ${status.status}`);
  } catch (error) {
    logger.error(`Failed to process status update for message ${status.id}:`, error);
  }
}
}

// Export the queue for use in other parts of the application
module.exports = queue;