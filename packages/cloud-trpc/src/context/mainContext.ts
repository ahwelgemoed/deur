import { PrismaClient } from '@deur/cloud-prisma-db';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import axios from 'axios';

const prisma = new PrismaClient();
export function cloudCreateContext({ req, res }: CreateFastifyContextOptions) {
  return { req, res, axios, prisma };
}

export type CloudContext = inferAsyncReturnType<typeof cloudCreateContext>;
