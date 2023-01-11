import axios from 'axios';
import { Prisma } from '@deur/cloud-prisma-db';
import { RedisKeys } from '@deur/shared-types';
import { FastifyInstance } from 'fastify';
import { redis } from '../set-up-server';

import { Prisma as CloudPrisma } from '@deur/cloud-prisma-db';

async function clientRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { id: number };
    Querystring: { clearCache: string };
  }>(
    '/get-club-user/:id',

    async function (request, _reply) {
      const { id } = request.params;

      const cachedClubUsers = await redis.get(RedisKeys.LocalBaseUsers);
      if (cachedClubUsers) {
        const allClubsUsers: Prisma.UserGroupByOutputType[] = JSON.parse(cachedClubUsers);
        const clubUser: Prisma.UserGroupByOutputType | undefined = allClubsUsers.find(
          (user) => user.id === Number(id)
        );
        console.log('clubUser', clubUser);
        if (clubUser && clubUser.isAllowed) {
          // USER IS ALLOWED
          return { allowed: true };
        }
        if (clubUser && !clubUser.isAllowed) {
          const userFromCloud = await fetchUserFromCloud(id);
          if (userFromCloud && userFromCloud.isAllowed) {
            // TODO: Update Redis
            return { allowed: true };
          }
          return { allowed: false };
        }
        if (!clubUser) {
          // USER IS NOT FOUND
          console.log('USER IS NOT FOUND');
          return { allowed: false };
        }
      } else {
        console.log('NOT IN REDIS');
        return { allowed: false };
      }
    }
  );
}

async function fetchUserFromCloud(
  id: number
): Promise<CloudPrisma.UserGroupByOutputType | undefined> {
  const url = `${process.env.BASE_CLOUD_URL}/v1/user-routes/user-by-id/${id}`;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const users = data.users as CloudPrisma.UserGroupByOutputType;
    return users;
  } catch (error) {
    console.log(error);
    return;
  }
}

export default clientRoutes;
