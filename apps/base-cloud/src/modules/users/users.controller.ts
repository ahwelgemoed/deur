import { FastifyRequest, FastifyReply } from 'fastify';

import { prisma } from '../../server';

export async function getUsersByLocation(request: FastifyRequest, reply: FastifyReply) {
  const headers = request.headers;
  const location = headers['x-location'] as string;
  const locationId = parseInt(location, 10);

  if (isNaN(locationId)) {
    throw new Error('Invalid location');
  }
  try {
    // Move to DTO
    const allUsersAtLocation = await prisma.user.findMany({
      where: {
        locationId,
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
  const country = headers['x-country'] as string;
  const countryId = parseInt(country, 10);

  if (isNaN(countryId)) {
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
