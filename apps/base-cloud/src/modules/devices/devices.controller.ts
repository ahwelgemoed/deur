import { FastifyRequest, FastifyReply } from 'fastify';

import { prisma } from '../../server';
// import { UserAllowedCheckRequest } from './countries.schema';

export async function getAllDeviceTypes(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Move to DTO
    const allDeviceTypes = await prisma.deviceTypes.findMany();
    // const allDeviceTypes = await prisma.deviceType.findMany();
    return reply.code(200).send(allDeviceTypes);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
