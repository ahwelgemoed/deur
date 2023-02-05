import { FastifyInstance } from 'fastify';

import { getUsersByLocation } from './subscriptions.controller';
import { $ref } from './subscriptions.schemas';

async function subscriptionRoutes(server: FastifyInstance) {
  server.get(
    '/subscriptions',
    {
      schema: {
        headers: $ref('cloudHeaders'),
        description: 'Get users by location',
        tags: ['Location', 'User'],
        response: {
          200: $ref('allSubscriptions'),
        },
      },
    },
    getUsersByLocation
  );
}

export default subscriptionRoutes;
