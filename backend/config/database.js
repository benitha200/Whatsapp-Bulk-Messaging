// config/database.js
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

const connectDB = async () => {
  try {
    // Verify the connection by executing a simple query
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database connected successfully');
    return prisma;
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

// Export both the Prisma client and the connection function
export { prisma };
export default connectDB;