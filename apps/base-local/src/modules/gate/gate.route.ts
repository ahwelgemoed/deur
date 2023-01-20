import { FastifyInstance } from 'fastify';
import { userAllowedCheck } from './gate.controller';
import { $ref } from './gate.schema';

async function gateRoutes(server: FastifyInstance) {
  server.post(
    '/user-gate-check',
    {
      schema: {
        body: $ref('userAllowedCheckRequestSchema'),
        response: {
          200: $ref('userAllowedCheckResponseSchema'),
        },
      },
    },
    userAllowedCheck
  );
}

export default gateRoutes;
