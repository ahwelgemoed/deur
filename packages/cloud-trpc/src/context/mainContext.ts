import { PrismaClient } from '@deur/cloud-prisma-db';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import axios from 'axios';

export function cloudCreateContext({ req, res }: CreateFastifyContextOptions) {
  const prisma = new PrismaClient();
  return { req, res, axios, prisma };
}

export type Context = inferAsyncReturnType<typeof cloudCreateContext>;
export type CloudContext = inferAsyncReturnType<typeof cloudCreateContext>;
