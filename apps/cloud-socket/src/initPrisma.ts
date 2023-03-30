import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const initPrisma = async () => {
  try {
    await prisma.$connect();
    return prisma;
  } catch (error) {
    await prisma.$disconnect();
    process.exit(1);
  }
};
