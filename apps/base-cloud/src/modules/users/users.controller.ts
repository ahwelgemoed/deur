import { FastifyRequest, FastifyReply } from 'fastify';

import { prisma } from '../../server';

export async function getUsersByLocation(request: FastifyRequest, reply: FastifyReply) {
  const headers = request.headers;
  const locationId = headers['x-location'] as string;

  if (!locationId) {
    throw new Error('Invalid location');
  }
  try {
    // Move to DTO
    const allUsersAtLocation = await prisma.user.findMany({
      where: {
        locationId,
      },
      include: {
        visits: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });
    return reply.code(200).send(allUsersAtLocation);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
export async function getUsersByCountry(request: FastifyRequest, reply: FastifyReply) {
  const headers = request.headers;
  const countryId = headers['x-country'] as string;

  if (!countryId) {
    throw new Error('Invalid Country');
  }
  try {
    // Move to DTO
    const allUsersInCountry = await prisma.user.findMany({
      where: {
        location: {
          countryId,
        },
      },
    });
    return reply.code(200).send(allUsersInCountry);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send({ status: 'ERROR' });
  }
}
