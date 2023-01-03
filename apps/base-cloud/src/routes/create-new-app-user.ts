import { FastifyInstance } from 'fastify';

import { prisma } from '../set-up-server';

async function clientRoutes(fastify: FastifyInstance) {
  fastify.post<{
    Body: { id: string };
  }>('/create-new-app-user', {}, async function (request, reply) {
    const { id } = request.body;

    return { users: 'any', cached: false };
  });
}

export default clientRoutes;