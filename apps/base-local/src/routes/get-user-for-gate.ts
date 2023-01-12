import axios from 'axios';
import { Prisma } from '@deur/cloud-prisma-db';
import { RedisKeys } from '@deur/shared-types';
import { FastifyInstance } from 'fastify';
import { redis } from '../set-up-server';
import { EReasons } from '@deur/shared-types';

import { Prisma as CloudPrisma } from '@deur/cloud-prisma-db';
import { env } from 'process';

async function clientRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { id: number };
    Querystring: { clearCache: string };
  }>(
    '/get-user-for-gate/:id',

    async function (request, _reply) {
      const { id } = request.params;

      const cachedClubUsers = await redis.get(RedisKeys.LocalBaseUsers);
      if (cachedClubUsers) {
        const allClubsUsers: Prisma.UserGroupByOutputType[] = JSON.parse(cachedClubUsers);
        const clubUser: Prisma.UserGroupByOutputType | undefined = allClubsUsers.find(
          (user) => user.id === Number(id)
        );
        console.log('🙏clubUser', clubUser);
        if (clubUser && clubUser.isAllowed) {
          // USER IS ALLOWED
          return { user: clubUser, allowed: true, reason: EReasons.USER_FOUND };
        }
        if (!clubUser || !clubUser.isAllowed) {
          const userFromCloud = await fetchUserFromCloud(id);
          return { user: userFromCloud.user, allowed: false, reason: userFromCloud.reason };
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
): Promise<{ user: CloudPrisma.UserGroupByOutputType | undefined; reason: EReasons }> {
  const url = `${process.env.BASE_CLOUD_URL}/v1/gate-routes/gate-user/${id}`;
  try {
    const response = await axios.get(url, { headers: { 'x-origin-call': process.env.CLUB_ID } });
    const data = await response.data;
    console.log('data', data);
    const user = data.user as CloudPrisma.UserGroupByOutputType;
    const reason = data.reason as EReasons;
    return { user, reason };
  } catch (error) {
    console.log(error);
    return { user: undefined, reason: EReasons.USER_NOT_FOUND };
  }
}

export default clientRoutes;
