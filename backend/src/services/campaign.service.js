// // services/campaign.service.js
// const Campaign = require('../models/campaign.model');
// const Contact = require('../models/contact.model');
// const Group = require('../models/group.model');
// const Message = require('../models/message.model');
// const AuditLog = require('../models/auditLog.model');
// const Template = require('../models/template.model');
// const { whatsappClient } = require('../../config/whatsapp');
// const { createNotification } = require('./notification.service');
// const { updateUserQuota } = require('./subscription.service');
// const AppError = require('../utils/appError').default;
// const logger = require('../utils/logger');
// const { queue } = require('../../config/bull');

// /**
//  * Service for managing messaging campaigns
//  */
// class CampaignService {
//   /**
//    * Create a new campaign
//    * @param {Object} campaignData Campaign data
//    * @param {String} userId User ID
//    * @returns {Promise<Object>} Created campaign
//    */
//   async createCampaign(campaignData, userId) {
//     try {
//       // Check if the user has a valid template if using template
//       if (campaignData.messageType === 'template') {
//         const template = await Template.findOne({ 
//           _id: campaignData.templateId,
//           whatsappApproved: true
//         });
        
//         if (!template) {
//           throw new AppError('Selected template not found or not approved', 400);
//         }
        
//         campaignData.template = template._id;
//       }
      
//       // Create the campaign
//       const campaign = await Campaign.create({
//         ...campaignData,
//         createdBy: userId,
//         status: 'draft'
//       });
      
//       // Log the action
//       await AuditLog.create({
//         user: userId,
//         action: 'create',
//         resourceType: 'campaign',
//         resourceId: campaign._id,
//         details: {
//           campaignName: campaign.name,
//           messageType: campaign.messageType
//         }
//       });
      
//       // Create notification
//       await createNotification({
//         userId,
//         title: 'Campaign Created',
//         message: `Campaign "${campaign.name}" has been created successfully.`,
//         type: 'campaign',
//         linkUrl: `/campaigns/${campaign._id}`
//       });
      
//       return campaign;
//     } catch (error) {
//       logger.error('Failed to create campaign:', error);
//       throw error;
//     }
//   }
  
//   /**
//    * Get campaign by ID
//    * @param {String} campaignId Campaign ID
//    * @param {String} userId User ID
//    * @returns {Promise<Object>} Campaign data
//    */
//   async getCampaignById(campaignId, userId) {
//     try {
//       const campaign = await Campaign.findOne({
//         _id: campaignId,
//         createdBy: userId
//       }).populate('template');
      
//       if (!campaign) {
//         throw new AppError('Campaign not found', 404);
//       }
      
//       return campaign;
//     } catch (error) {
//       logger.error('Failed to get campaign:', error);
//       throw error;
//     }
//   }
  
//   /**
//    * Update campaign
//    * @param {String} campaignId Campaign ID
//    * @param {Object} updateData Update data
//    * @param {String} userId User ID
//    * @returns {Promise<Object>} Updated campaign
//    */
//   async updateCampaign(campaignId, updateData, userId) {
//     try {
//       // Don't allow updating campaign if it's already running or completed
//       const currentCampaign = await Campaign.findOne({
//         _id: campaignId,
//         createdBy: userId
//       });
      
//       if (!currentCampaign) {
//         throw new AppError('Campaign not found', 404);
//       }
      
//       if (['running', 'completed', 'paused'].includes(currentCampaign.status)) {
//         throw new AppError(`Cannot update campaign in ${currentCampaign.status} status`, 400);
//       }
      
//       // Update the campaign
//       const campaign = await Campaign.findOneAndUpdate(
//         { _id: campaignId, createdBy: userId },
//         updateData,
//         { new: true }
//       );
      
//       // Log the action
//       await AuditLog.create({
//         user: userId,
//         action: 'update',
//         resourceType: 'campaign',
//         resourceId: campaign._id,
//         details: {
//           campaignName: campaign.name,
//           updatedFields: Object.keys(updateData)
//         }
//       });
      
//       return campaign;
//     } catch (error) {
//       logger.error('Failed to update campaign:', error);
//       throw error;
//     }
//   }
  
//   /**
//    * Delete campaign
//    * @param {String} campaignId Campaign ID
//    * @param {String} userId User ID
//    * @returns {Promise<Boolean>} Success status
//    */
//   async deleteCampaign(campaignId, userId) {
//     try {
//       const campaign = await Campaign.findOne({
//         _id: campaignId,
//         createdBy: userId
//       });
      
//       if (!campaign) {
//         throw new AppError('Campaign not found', 404);
//       }
      
//       if (['running'].includes(campaign.status)) {
//         throw new AppError('Cannot delete a running campaign', 400);
//       }
      
//       await Campaign.deleteOne({ _id: campaignId });
      
//       // Log the action
//       await AuditLog.create({
//         user: userId,
//         action: 'delete',
//         resourceType: 'campaign',
//         resourceId: campaignId,
//         details: {
//           campaignName: campaign.name
//         }
//       });
      
//       return true;
//     } catch (error) {
//       logger.error('Failed to delete campaign:', error);
//       throw error;
//     }
//   }
  
//   /**
//    * Get all campaigns for a user
//    * @param {String} userId User ID
//    * @param {Object} filters Filter options
//    * @returns {Promise<Array>} List of campaigns
//    */
//   async getCampaigns(userId, filters = {}) {
//     try {
//       const query = { createdBy: userId };
      
//       // Apply filters
//       if (filters.status) {
//         query.status = filters.status;
//       }
      
//       if (filters.search) {
//         query.name = { $regex: filters.search, $options: 'i' };
//       }
      
//       // Pagination options
//       const page = parseInt(filters.page) || 1;
//       const limit = parseInt(filters.limit) || 10;
//       const skip = (page - 1) * limit;
      
//       // Execute query
//       const campaigns = await Campaign.find(query)
//         .populate('template', 'name whatsappTemplateId')
//         .sort({ createdAt: -1 })
//         .skip(skip)
//         .limit(limit);
      
//       // Get total count
//       const total = await Campaign.countDocuments(query);
      
//       return {
//         data: campaigns,
//         pagination: {
//           total,
//           page,
//           limit,
//           pages: Math.ceil(total / limit)
//         }
//       };
//     } catch (error) {
//       logger.error('Failed to get campaigns:', error);
//       throw error;
//     }
//   }
  
//   /**
//    * Launch a campaign
//    * @param {String} campaignId Campaign ID
//    * @param {String} userId User ID
//    * @returns {Promise<Object>} Updated campaign
//    */
//   async launchCampaign(campaignId, userId) {
//     try {
//       const campaign = await Campaign.findOne({
//         _id: campaignId,
//         createdBy: userId
//       }).populate('template');
      
//       if (!campaign) {
//         throw new AppError('Campaign not found', 404);
//       }
      
//       if (campaign.status !== 'draft' && campaign.status !== 'paused') {
//         throw new AppError(`Cannot launch campaign in ${campaign.status} status`, 400);
//       }
      
//       // Validate campaign data
//       if (campaign.messageType === 'template' && !campaign.template) {
//         throw new AppError('Template is required for template messages', 400);
//       }
      
//       if (campaign.messageType === 'text' && !campaign.messageBody) {
//         throw new AppError('Message body is required for text messages', 400);
//       }
      
//       // Get target recipients
//       let recipients = [];
      
//       if (campaign.recipientType === 'contacts') {
//         // Individual contacts
//         recipients = await Contact.find({
//           _id: { $in: campaign.contacts },
//           user: userId
//         }).select('phoneNumber firstName lastName');
//       } else if (campaign.recipientType === 'groups') {
//         // Contact groups
//         const groups = await Group.find({
//           _id: { $in: campaign.groups },
//           user: userId
//         });
        
//         // Get all contacts from the groups
//         const contactsFromGroups = await Contact.find({
//           group: { $in: groups.map(g => g._id) },
//           user: userId
//         }).select('phoneNumber firstName lastName');
        
//         recipients = contactsFromGroups;
//       }
      
//       if (recipients.length === 0) {
//         throw new AppError('No valid recipients found for this campaign', 400);
//       }
      
//       // Check if user has enough message quota
//       // This would be implemented in the subscription service
//       const hasQuota = await this.checkMessageQuota(userId, recipients.length);
      
//       if (!hasQuota) {
//         throw new AppError('Insufficient message quota. Please upgrade your plan.', 403);
//       }
      
//       // Update campaign status
//       const updatedCampaign = await Campaign.findByIdAndUpdate(
//         campaignId,
//         { 
//           status: 'running',
//           startedAt: new Date(),
//           totalRecipients: recipients.length,
//           sentCount: 0,
//           deliveredCount: 0,
//           readCount: 0,
//           failedCount: 0
//         },
//         { new: true }
//       );
      
//       // Process the campaign in background using Bull queue
//       await queue.add('processCampaign', {
//         campaignId: campaign._id,
//         userId,
//         recipients: recipients.map(r => ({
//             contactId: r._id,
//             phoneNumber: r.phoneNumber,
//             firstName: r.firstName,
//             lastName: r.lastName
//           })),
//           messageType: campaign.messageType,
//           messageBody: campaign.messageBody,
//           mediaUrl: campaign.mediaUrl,
//           mediaType: campaign.mediaType,
//           template: campaign.template ? {
//             id: campaign.template._id,
//             name: campaign.template.whatsappTemplateId,
//             language: campaign.templateLanguage || 'en_US',
//             components: campaign.templateComponents || []
//           } : null,
//           schedule: campaign.schedule
//         }, {
//           priority: 1,
//           attempts: 3,
//           backoff: {
//             type: 'exponential',
//             delay: 5000
//           }
//         });
        
//         // Log the action
//         await AuditLog.create({
//           user: userId,
//           action: 'launch',
//           resourceType: 'campaign',
//           resourceId: campaign._id,
//           details: {
//             campaignName: campaign.name,
//             recipientCount: recipients.length
//           }
//         });
        
//         // Create notification
//         await createNotification({
//           userId,
//           title: 'Campaign Launched',
//           message: `Campaign "${campaign.name}" has been launched successfully with ${recipients.length} recipients.`,
//           type: 'campaign',
//           linkUrl: `/campaigns/${campaign._id}`
//         });
        
//         return updatedCampaign;
//       } catch (error) {
//         logger.error('Failed to launch campaign:', error);
//         throw error;
//       }
//     }
    
//     /**
//      * Pause a running campaign
//      * @param {String} campaignId Campaign ID
//      * @param {String} userId User ID
//      * @returns {Promise<Object>} Updated campaign
//      */
//     async pauseCampaign(campaignId, userId) {
//       try {
//         const campaign = await Campaign.findOne({
//           _id: campaignId,
//           createdBy: userId
//         });
        
//         if (!campaign) {
//           throw new AppError('Campaign not found', 404);
//         }
        
//         if (campaign.status !== 'running') {
//           throw new AppError('Only running campaigns can be paused', 400);
//         }
        
//         // Update campaign status
//         const updatedCampaign = await Campaign.findByIdAndUpdate(
//           campaignId,
//           { status: 'paused', pausedAt: new Date() },
//           { new: true }
//         );
        
//         // Signal the queue to pause processing
//         // This would be implemented with Bull queue
//         await queue.pause(`campaign:${campaignId}`);
        
//         // Log the action
//         await AuditLog.create({
//           user: userId,
//           action: 'pause',
//           resourceType: 'campaign',
//           resourceId: campaign._id,
//           details: {
//             campaignName: campaign.name
//           }
//         });
        
//         // Create notification
//         await createNotification({
//           userId,
//           title: 'Campaign Paused',
//           message: `Campaign "${campaign.name}" has been paused.`,
//           type: 'campaign',
//           linkUrl: `/campaigns/${campaign._id}`
//         });
        
//         return updatedCampaign;
//       } catch (error) {
//         logger.error('Failed to pause campaign:', error);
//         throw error;
//       }
//     }
    
//     /**
//      * Stop/cancel a campaign
//      * @param {String} campaignId Campaign ID
//      * @param {String} userId User ID
//      * @returns {Promise<Object>} Updated campaign
//      */
//     async stopCampaign(campaignId, userId) {
//       try {
//         const campaign = await Campaign.findOne({
//           _id: campaignId,
//           createdBy: userId
//         });
        
//         if (!campaign) {
//           throw new AppError('Campaign not found', 404);
//         }
        
//         if (!['running', 'paused'].includes(campaign.status)) {
//           throw new AppError('Only running or paused campaigns can be stopped', 400);
//         }
        
//         // Update campaign status
//         const updatedCampaign = await Campaign.findByIdAndUpdate(
//           campaignId,
//           { status: 'cancelled', stoppedAt: new Date() },
//           { new: true }
//         );
        
//         // Remove from queue
//         await queue.removeJobs(`campaign:${campaignId}`);
        
//         // Log the action
//         await AuditLog.create({
//           user: userId,
//           action: 'stop',
//           resourceType: 'campaign',
//           resourceId: campaign._id,
//           details: {
//             campaignName: campaign.name
//           }
//         });
        
//         // Create notification
//         await createNotification({
//           userId,
//           title: 'Campaign Stopped',
//           message: `Campaign "${campaign.name}" has been stopped.`,
//           type: 'campaign',
//           linkUrl: `/campaigns/${campaign._id}`
//         });
        
//         return updatedCampaign;
//       } catch (error) {
//         logger.error('Failed to stop campaign:', error);
//         throw error;
//       }
//     }
    
//     /**
//      * Check if user has enough message quota
//      * @param {String} userId User ID
//      * @param {Number} messageCount Number of messages
//      * @returns {Promise<Boolean>} Has quota
//      */
//     async checkMessageQuota(userId, messageCount) {
//       try {
//         // Get user subscription and check quota
//         // This is a placeholder - implement according to your subscription model
//         const { hasQuota } = await updateUserQuota(userId, messageCount, 'check');
//         return hasQuota;
//       } catch (error) {
//         logger.error('Failed to check message quota:', error);
//         throw error;
//       }
//     }
    
//     /**
//      * Update campaign statistics
//      * @param {String} campaignId Campaign ID
//      * @param {Object} stats Stats to update
//      * @returns {Promise<Object>} Updated campaign
//      */
//     async updateCampaignStats(campaignId, stats) {
//       try {
//         const campaign = await Campaign.findById(campaignId);
        
//         if (!campaign) {
//           throw new AppError('Campaign not found', 404);
//         }
        
//         const updateData = {};
        
//         if (stats.sent) {
//           updateData.sentCount = (campaign.sentCount || 0) + 1;
//         }
        
//         if (stats.delivered) {
//           updateData.deliveredCount = (campaign.deliveredCount || 0) + 1;
//         }
        
//         if (stats.read) {
//           updateData.readCount = (campaign.readCount || 0) + 1;
//         }
        
//         if (stats.failed) {
//           updateData.failedCount = (campaign.failedCount || 0) + 1;
//         }
        
//         // Check if campaign is completed
//         if (updateData.sentCount + updateData.failedCount === campaign.totalRecipients) {
//           updateData.status = 'completed';
//           updateData.completedAt = new Date();
//         }
        
//         const updatedCampaign = await Campaign.findByIdAndUpdate(
//           campaignId,
//           updateData,
//           { new: true }
//         );
        
//         return updatedCampaign;
//       } catch (error) {
//         logger.error('Failed to update campaign stats:', error);
//         throw error;
//       }
//     }
    
//     /**
//      * Get campaign analytics for all user campaigns
//      * @param {String} userId User ID
//      * @param {Object} filters Date filters
//      * @returns {Promise<Object>} Campaign analytics
//      */
//     async getCampaignAnalytics(userId, filters = {}) {
//       try {
//         const query = { createdBy: userId };
        
//         // Apply date filters
//         if (filters.startDate && filters.endDate) {
//           query.createdAt = {
//             $gte: new Date(filters.startDate),
//             $lte: new Date(filters.endDate)
//           };
//         }
        
//         // Aggregate campaign stats
//         const analytics = await Campaign.aggregate([
//           { $match: query },
//           { $group: {
//             _id: null,
//             totalCampaigns: { $sum: 1 },
//             totalRecipients: { $sum: "$totalRecipients" },
//             totalSent: { $sum: "$sentCount" },
//             totalDelivered: { $sum: "$deliveredCount" },
//             totalRead: { $sum: "$readCount" },
//             totalFailed: { $sum: "$failedCount" },
//             averageDeliveryRate: { 
//               $avg: { 
//                 $cond: [
//                   { $eq: ["$sentCount", 0] },
//                   0,
//                   { $divide: ["$deliveredCount", "$sentCount"] }
//                 ]
//               }
//             },
//             averageReadRate: { 
//               $avg: { 
//                 $cond: [
//                   { $eq: ["$deliveredCount", 0] },
//                   0,
//                   { $divide: ["$readCount", "$deliveredCount"] }
//                 ]
//               }
//             }
//           }},
//           { $project: {
//             _id: 0,
//             totalCampaigns: 1,
//             totalRecipients: 1,
//             totalSent: 1,
//             totalDelivered: 1,
//             totalRead: 1,
//             totalFailed: 1,
//             averageDeliveryRate: { $multiply: ["$averageDeliveryRate", 100] },
//             averageReadRate: { $multiply: ["$averageReadRate", 100] }
//           }}
//         ]);
        
//         // Get campaign stats by day for the last 30 days
//         const thirtyDaysAgo = new Date();
//         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
//         const dailyStats = await Campaign.aggregate([
//           { $match: { 
//             createdBy: userId,
//             createdAt: { $gte: thirtyDaysAgo }
//           }},
//           { $group: {
//             _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
//             totalCampaigns: { $sum: 1 },
//             totalSent: { $sum: "$sentCount" },
//             totalDelivered: { $sum: "$deliveredCount" },
//             totalRead: { $sum: "$readCount" }
//           }},
//           { $sort: { _id: 1 }}
//         ]);
        
//         return {
//           summary: analytics[0] || {
//             totalCampaigns: 0,
//             totalRecipients: 0,
//             totalSent: 0,
//             totalDelivered: 0,
//             totalRead: 0,
//             totalFailed: 0,
//             averageDeliveryRate: 0,
//             averageReadRate: 0
//           },
//           dailyStats: dailyStats
//         };
//       } catch (error) {
//         logger.error('Failed to get campaign analytics:', error);
//         throw error;
//       }
//     }
//   }
  
//   module.exports = new CampaignService();

// services/campaign.service.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class CampaignService {
  async createCampaign(data) {
    return prisma.campaign.create({
      data,
      include: {
        template: true,
        messages: true
      }
    });
  }

  async getCampaignById(id) {
    return prisma.campaign.findUnique({
      where: { id: parseInt(id) },
      include: {
        template: true,
        messages: {
          include: {
            contact: true
          }
        }
      }
    });
  }

  async updateCampaign(id, data) {
    return prisma.campaign.update({
      where: { id: parseInt(id) },
      data,
      include: {
        template: true,
        messages: true
      }
    });
  }

  async deleteCampaign(id) {
    return prisma.campaign.delete({
      where: { id: parseInt(id) }
    });
  }

  async getCampaignsByUser(userId) {
    return prisma.campaign.findMany({
      where: { userId: parseInt(userId) },
      include: {
        template: true,
        messages: true
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async searchCampaigns(query, userId) {
    return prisma.campaign.findMany({
      where: {
        userId: parseInt(userId),
        OR: [
          { name: { contains: query } },
          { status: { contains: query } },
          { notes: { contains: query } }
        ]
      },
      include: {
        template: true,
        messages: true
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async updateCampaignStatus(id, status) {
    return prisma.campaign.update({
      where: { id: parseInt(id) },
      data: { status }
    });
  }

  async scheduleCampaign(id, scheduleData) {
    return prisma.campaign.update({
      where: { id: parseInt(id) },
      data: { 
        schedule: scheduleData,
        status: 'scheduled'
      }
    });
  }

  async getCampaignAnalytics(id) {
    const campaign = await prisma.campaign.findUnique({
      where: { id: parseInt(id) },
      include: {
        messages: true
      }
    });

    if (!campaign) return null;

    // Calculate analytics
    const totalMessages = campaign.messages.length;
    const delivered = campaign.messages.filter(msg => msg.status === 'delivered').length;
    const read = campaign.messages.filter(msg => msg.status === 'read').length;
    const failed = campaign.messages.filter(msg => msg.status === 'failed').length;
    
    const analytics = {
      totalMessages,
      delivered,
      read,
      failed,
      deliveryRate: totalMessages > 0 ? (delivered / totalMessages * 100).toFixed(2) : 0,
      readRate: delivered > 0 ? (read / delivered * 100).toFixed(2) : 0,
      failureRate: totalMessages > 0 ? (failed / totalMessages * 100).toFixed(2) : 0
    };

    // Update campaign with analytics
    await prisma.campaign.update({
      where: { id: parseInt(id) },
      data: { analytics }
    });

    return analytics;
  }
}

export default new CampaignService();