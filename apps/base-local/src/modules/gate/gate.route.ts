import { FastifyInstance } from 'fastify';
import { getGateUserToHelp, userAllowedCheck } from './gate.controller';
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
  server.get(
    '/user-gate-help/:id',
    {
      schema: {
        params: $ref('userHelpRequestParams'),
        response: {
          200: $ref('HelpUserReply'),
        },
      },
    },
    getGateUserToHelp
  );
}

export default gateRoutes;
