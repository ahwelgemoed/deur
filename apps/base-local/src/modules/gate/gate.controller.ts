import {
  CompleteVisitsToLocation,
  ICleanUserSchema,
  LocationCloudModel,
  MQMessageTypes,
  ReasonForVisit,
  RedisKeys,
} from '@deur/shared-types';
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { logGateUserQueue, redisClient } from '../../server';
import { GPSLocation, isFeasibleVisit } from '../../services/isFeasibleVisit';
import { UserAllowedCheckRequest, UserHelpAtGate } from './gate.schema';

export async function userAllowedCheck(
  request: FastifyRequest<{
    Body: UserAllowedCheckRequest;
  }>,
  reply: FastifyReply
) {
  const requestId = request.id;
  try {
    try {
      // Random UUID for this request
      const body = request.body;
      const userInJustSignedInCache = await findUserInJustSignedInCache(body.cardNumber);
      if (userInJustSignedInCache) {
        // User Signed In recently
        return reply.code(200).send({ isAllowed: false, requestId });
      }
      const data = await redisClient.get(RedisKeys.LocalBaseUsers);
      const users = JSON.parse(data as string) as ICleanUserSchema[] | undefined;

      if (users && users.length > 0) {
        const user = users.find((user) => user.cardNumber === body.cardNumber);

        if (!user) {
          addNotAllowedUserToCache(requestId, ReasonForVisit.NOT_USER, user);
          return reply.code(200).send({ isAllowed: false, requestId });
        }
        if (user?.visits[0]) {
          // Do Time Check
          const distanceCheck = await allowBasedOnLastSignedInLocation(user?.visits[0]);
          if (!distanceCheck) {
            addNotAllowedUserToCache(requestId, ReasonForVisit.NOT_FEASIBLE, user);
            return reply.code(200).send({ isAllowed: false, requestId });
          }
        }

        if (user?.isAllowed) {
          // Add User To Message Queue to Process it on the Cloud
          logGateUserQueue.add(
            MQMessageTypes.USER_IS_ALLOWED,
            { user },
            {
              removeOnComplete: {
                age: 3600,
                count: 1000,
              },
            }
          );
          return reply.code(200).send({ isAllowed: true, requestId });
        }
        if (!user?.isAllowed) {
          // WE SHOULD RE-CALL CLOUD API And make sure that the user is not allowed
          addNotAllowedUserToCache(requestId, ReasonForVisit.NO_PAYMENT, user);
          return reply.code(200).send({ isAllowed: false, reason: ReasonForVisit.NO_PAYMENT });
        }
      }
      return reply.code(200).send({ isAllowed: false, requestId });
    } catch (error) {
      return reply.code(200).send({ isAllowed: false, requestId });
    }
  } catch (error) {
    return reply.code(500).send({ status: 'ERROR' });
  }
}
/**
 * Find User in Just Signed In Cache
 */
const findUserInJustSignedInCache = async (cardNumber: string) => {
  const data = await redisClient.get(RedisKeys.JUST_SIGNED_IN);
  if (data) {
    const users = JSON.parse(data as string) as ICleanUserSchema[];
    const user = users.find((user) => user.cardNumber === cardNumber);
    if (user) {
      return user;
    }
  }
  return;
};

const allowBasedOnLastSignedInLocation = async (lastVisit: CompleteVisitsToLocation) => {
  // Get Location from Redis
  const allLocations = await redisClient.get(RedisKeys.ALL_LOCATIONS);
  const parsedLocations = JSON.parse(allLocations as string) as z.infer<
    typeof LocationCloudModel
  >[];

  const findUsersLastSignedInLocation = parsedLocations.find((l) => l.id === lastVisit.locationId);
  const currentLocation = parsedLocations.find((l) => l.id === process.env.LOCATION_ID);

  if (findUsersLastSignedInLocation && currentLocation) {
    const userLocationGPS: GPSLocation = {
      lat: findUsersLastSignedInLocation.lat,
      long: findUsersLastSignedInLocation.long,
    };
    const currentLocationGPS: GPSLocation = {
      lat: currentLocation.lat,
      long: currentLocation.long,
    };

    return isFeasibleVisit(userLocationGPS, currentLocationGPS, lastVisit.createdAt);
  }
};

const addNotAllowedUserToCache = (
  id: string,
  reason: ReasonForVisit,
  user: ICleanUserSchema | undefined
) => {
  const data = {
    ...user,
    errorId: id,
    reason,
  };
  console.log('id💃🏽', id);
  redisClient.set(id, JSON.stringify(data), 'EX', 20_000);
};

export async function getGateUserToHelp(
  request: FastifyRequest<{
    Params: UserHelpAtGate;
  }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  try {
    const data = await redisClient.get(id);
    console.log('data', data);
    if (data) {
      const user = JSON.parse(data as string) as ICleanUserSchema;
      console.log('user', user);

      return reply.code(200).send({ ...user });
    }
    return reply.code(200).send({ user: null });
  } catch (error) {
    return reply.code(500).send({ status: 'ERROR' });
  }
}
