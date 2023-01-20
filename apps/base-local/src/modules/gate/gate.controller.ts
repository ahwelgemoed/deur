import { FastifyRequest, FastifyReply } from 'fastify';
import { UserAllowedCheckRequest } from './gate.schema';

export async function userAllowedCheck(
  request: FastifyRequest<{
    Body: UserAllowedCheckRequest;
  }>,
  reply: FastifyReply
) {
  try {
    // some Logic
    const body = request.body;

    return reply.code(200).send({ isAllowed: true, braaf: 'asd' });
  } catch (error) {
    return reply.code(500).send({ status: 'ERROR' });
  }
}
