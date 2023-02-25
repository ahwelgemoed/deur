import {
  GPSLocation,
  isGeographicallyFeasible,
} from '@deur/shared-functions/src/visits/isGeographicallyFeasible';
import {
  CompleteVisitsToLocation,
  LocationCloudModel,
  ReasonForVisit,
  RedisKeys,
} from '@deur/shared-types';
import { z } from 'zod';

import { LocalContext } from '../context/localServerContext';
// isGeographicallyFeasible
export const isFeasibleVisit = async (
  ctx: LocalContext,
  lastVisit: CompleteVisitsToLocation | undefined
): Promise<{
  isFeasible: boolean;
  reason: ReasonForVisit;
}> => {
  if (!lastVisit) {
    return {
      isFeasible: true,
      reason: ReasonForVisit.USER_IS_ALLOWED,
    };
  }
  // Get Location from Redis
  const allLocations = await ctx.redis.get(RedisKeys.ALL_LOCATIONS);
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

    const isGeoFeasible = await isGeographicallyFeasible(
      userLocationGPS,
      currentLocationGPS,
      lastVisit.createdAt
    );

    return {
      isFeasible: isGeoFeasible,
      reason: isGeoFeasible ? ReasonForVisit.GEO_FEASIBLE : ReasonForVisit.NOT_GEO_FEASIBLE,
    };
  }
  return {
    isFeasible: false,
    reason: ReasonForVisit.ERROR,
  };
};
