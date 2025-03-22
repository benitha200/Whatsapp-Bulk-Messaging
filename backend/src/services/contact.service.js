// services/contact.service.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ContactService {
  static async createContact(contactData) {
    const contact = await prisma.contact.create({
      data: contactData
    });
    return contact;
  }

  static async getContactById(id) {
    const contact = await prisma.contact.findUnique({
      where: { id: parseInt(id) },
      include: { user: true }
    });
    return contact;
  }

  static async updateContact(id, updateData) {
    const contact = await prisma.contact.update({
      where: { id: parseInt(id) },
      data: updateData
    });
    return contact;
  }

  static async deleteContact(id) {
    await prisma.contact.delete({
      where: { id: parseInt(id) }
    });
  }

  static async getContactsByUser(userId) {
    const contacts = await prisma.contact.findMany({
      where: { userId: parseInt(userId) }
    });
    return contacts;
  }

  static async searchContacts(query, userId) {
    const contacts = await prisma.contact.findMany({
      where: {
        userId: parseInt(userId),
        OR: [
          { firstName: { contains: query } },
          { lastName: { contains: query } },
          { phoneNumber: { contains: query } },
          { email: { contains: query } }
        ]
      }
    });
    return contacts;
  }
}

export default ContactService;