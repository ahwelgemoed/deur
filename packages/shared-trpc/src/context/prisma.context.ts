import { PrismaClient } from '@deur/cloud-prisma-db';
import trpc from '@trpc/server';

export async function createContext() {
  const prisma = new PrismaClient();

  return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
