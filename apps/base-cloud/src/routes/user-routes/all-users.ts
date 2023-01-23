import { FastifyInstance } from 'fastify';
import zodToJsonSchema from 'zod-to-json-schema';
import { UserCloudModel } from '@deur/shared-types';
import { prisma } from '../../set-up-server';

async function userRoutes(fastify: FastifyInstance) {
  fastify.get<{}>(
    '/all-users',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        querystring: {
          type: 'object',
          properties: {
            clearCache: { type: 'string' },
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              users: zodToJsonSchema(UserCloudModel, { name: 'User' })?.definitions?.User,
              cached: { type: 'boolean' },
            },
          },
        },
      },
    },
    async function (request, reply) {
      try {
        const allUsers = await prisma.user.findMany({});
        return { users: allUsers, cached: undefined, error: undefined };
      } catch (error) {
        return { local: undefined, cached: undefined, error: error };
      }
    }
  );
}

export default userRoutes;
