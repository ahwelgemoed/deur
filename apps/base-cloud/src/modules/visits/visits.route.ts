import { FastifyInstance } from 'fastify';

import { logUserVisit } from './visits.controller';
import { $ref } from './visits.schemas';

// import { getAllCountries } from './countries.controller';

async function visitRoutes(server: FastifyInstance) {
  server.post(
    '/log-visit',
    {
      schema: {
        headers: $ref('cloudHeaders'),
        description: 'Get users by location',
        tags: ['Location', 'User', 'Visits'],
        body: $ref('logVisit'),
        response: {
          201: $ref('logVisitReturn'),
        },
      },
    },
    logUserVisit
  );
}

export default visitRoutes;
