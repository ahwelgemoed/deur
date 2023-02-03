import { FastifyRequest, FastifyReply } from 'fastify';

import { UserBodyVisit } from './visits.schemas';
import { prisma } from '../../server';

export async function logUserVisit(request: FastifyRequest, reply: FastifyReply) {
  const headers = request.headers;
  const locationId = headers['x-location'] as string;
  const { cardNumber } = request.body as UserBodyVisit;

  try {
    // const location = await prisma.location.findUnique({
    //   where: {
    //     id: locationId,
    //   },
    // });
    console.log('cardNumber', cardNumber);
    const user = await prisma.user.findUnique({
      where: {
        cardNumber: cardNumber.trim(),
      },
    });
    console.log('user', user, locationId);
    if (!user) {
      throw new Error('User not found');
    }
    const visit = await prisma.visitsToLocation.create({
      data: {
        userId: user.id,
        locationId,
      },
    });

    return reply.code(201).send({ id: visit.id });
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
