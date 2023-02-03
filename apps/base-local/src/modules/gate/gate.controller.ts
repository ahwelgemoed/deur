import { ICleanUserSchema, RedisKeys } from '@deur/shared-types';
import { FastifyRequest, FastifyReply } from 'fastify';
import { logGateUserQueue, redisClient } from '../../server';
import { UserAllowedCheckRequest } from './gate.schema';

export async function userAllowedCheck(
  request: FastifyRequest<{
    Body: UserAllowedCheckRequest;
  }>,
  reply: FastifyReply
) {
  try {
    try {
      const body = request.body;
      const data = await redisClient.get(RedisKeys.LocalBaseUsers);
      const users = JSON.parse(data as string) as ICleanUserSchema[] | undefined;
      if (users && users.length > 0) {
        const user = users.find((user) => user.cardNumber === body.cardNumber);
        if (user?.isAllowed) {
          logGateUserQueue.add(
            'USER_IS_ALLOWED',
            { user },
            {
              removeOnComplete: {
                age: 3600,
                count: 1000,
              },
            }
          );
          return reply.code(200).send({ isAllowed: true });
        }
        if (user?.isAllowed || !user) {
          // WE SHOULD RE-CALL CLOUD API And make sure that the user is not allowed
          return reply.code(200).send({ isAllowed: false });
        }
      }
      return reply.code(200).send({ isAllowed: false });
    } catch (error) {
      return reply.code(200).send({ isAllowed: false });
    }
  } catch (error) {
    return reply.code(500).send({ status: 'ERROR' });
  }
}
