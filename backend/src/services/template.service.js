// services/template.service.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class TemplateService {
  async createTemplate(data) {
    return prisma.template.create({
      data
    });
  }

  async getTemplateById(id) {
    return prisma.template.findUnique({
      where: { id: parseInt(id) }
    });
  }

  async updateTemplate(id, data) {
    return prisma.template.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteTemplate(id) {
    return prisma.template.delete({
      where: { id: parseInt(id) }
    });
  }

  async getTemplatesByUser(userId) {
    return prisma.template.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: 'desc' }
    });
  }

  async searchTemplates(query, userId) {
    return prisma.template.findMany({
      where: {
        userId: parseInt(userId),
        OR: [
          { name: { contains: query } },
          { content: { contains: query } },
          { category: { contains: query } }
        ]
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async getPublicTemplates() {
    return prisma.template.findMany({
      where: { isPublic: true },
      orderBy: { usageCount: 'desc' }
    });
  }

  async incrementUsageCount(id) {
    return prisma.template.update({
      where: { id: parseInt(id) },
      data: {
        usageCount: {
          increment: 1
        }
      }
    });
  }

  async getTemplatesByCategory(category, userId) {
    return prisma.template.findMany({
      where: {
        OR: [
          { userId: parseInt(userId) },
          { isPublic: true }
        ],
        category
      },
      orderBy: { usageCount: 'desc' }
    });
  }

  async submitForWhatsappApproval(id, whatsappData) {
    return prisma.template.update({
      where: { id: parseInt(id) },
      data: {
        status: 'pending_approval',
        whatsappTemplateId: whatsappData.templateId || null,
        whatsappTemplateNamespace: whatsappData.namespace || null
      }
    });
  }

  async updateWhatsappApprovalStatus(id, isApproved) {
    return prisma.template.update({
      where: { id: parseInt(id) },
      data: {
        whatsappApproved: isApproved,
        status: isApproved ? 'approved' : 'rejected'
      }
    });
  }

  async cloneTemplate(id, userId) {
    // First get the template to clone
    const sourceTemplate = await this.getTemplateById(id);
    
    if (!sourceTemplate) return null;
    
    // Create a new template with the same data but new name
    const clonedData = {
      ...sourceTemplate,
      id: undefined, // Remove ID so a new one is generated
      name: `${sourceTemplate.name} (Copy)`,
      userId: parseInt(userId),
      usageCount: 0,
      createdAt: undefined,
      updatedAt: undefined,
      whatsappApproved: false,
      whatsappTemplateId: null,
      whatsappTemplateNamespace: null,
      status: 'draft',
      isPublic: false
    };
    
    return this.createTemplate(clonedData);
  }
}

export default new TemplateService();