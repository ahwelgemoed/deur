import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function userRoutes(fastify: FastifyInstance) {
  fastify.get<{
    Params: { userId: string };
  }>('/user-by-id/:userId', async function (request, reply) {
    try {
      const user = await prisma.user.findFirst({
        where: { id: Number(request.params.userId) },
      });
      return { user: user, cached: undefined, error: undefined };
    } catch (error) {
      console.log('error', error);
      return { user: undefined, cached: undefined, error: error };
    }
  });
  fastify.get<{
    Params: { cardNo: string };
  }>('/user-by-card-no/:cardNo', async function (request, reply) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(request.params.cardNo) },
      });
      return { user: user, cached: undefined, error: undefined };
    } catch (error) {
      return { user: undefined, cached: undefined, error: error };
    }
  });
}

export default userRoutes;
