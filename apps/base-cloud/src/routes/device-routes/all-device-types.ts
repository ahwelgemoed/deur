import { FastifyInstance } from 'fastify';
import { prisma } from '../../set-up-server';

async function countryRoutes(fastify: FastifyInstance) {
  fastify.get<{}>('/all-device-types', async function (request, reply) {
    try {
      const allDeviceTypes = await prisma.deviceTypes.findMany({});
      return { deviceTypes: allDeviceTypes, cached: undefined, error: undefined };
    } catch (error) {
      return { deviceTypes: undefined, cached: undefined, error: error };
    }
  });
}

export default countryRoutes;
