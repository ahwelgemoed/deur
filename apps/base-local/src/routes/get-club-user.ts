import { Prisma } from '@deur/cloud-prisma-db';
import { FastifyInstance } from 'fastify';
import { redis, REDIS_KEY } from '../set-up-server';

async function clientRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { id: number };
    Querystring: { clearCache: string };
  }>(
    '/get-club-user/:id',

    async function (request, _reply) {
      const { id } = request.params;

      const cachedClubUsers = await redis.get(REDIS_KEY);

      if (cachedClubUsers) {
        const allClubsUsers: Prisma.UserGroupByOutputType[] = JSON.parse(cachedClubUsers);

        const clubUser: Prisma.UserGroupByOutputType | undefined = allClubsUsers.find(
          (user) => user.id === Number(id)
        );

        if (clubUser && clubUser.isAllowed) {
          // USER IS ALLOWED
          return { allowed: true };
        }
        if (clubUser && !clubUser.isAllowed) {
          // TODO:: CALL CLOUD TO FIND OUT IF USER IS ALLOWED
          // TODO:: IF USER IS ALLOWED, UPDATE REDIS
          // USER IS NOT ALLOWED
          return { allowed: false };
        }
        if (!clubUser) {
          // USER IS NOT FOUND
          console.log('USER IS NOT FOUND');
          return { allowed: false };
        }
      }
    }
  );
}

export default clientRoutes;
