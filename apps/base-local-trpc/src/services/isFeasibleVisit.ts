const parseString = (str: string) => {
  const parsed = parseFloat(str);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed;
};

// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const dLat1 = toRad(lat1);
  const dLat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(dLat1) * Math.cos(dLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value: number) {
  return (Value * Math.PI) / 180;
}

const isThisAFeasibleDistance = (distance: number, time: number) => {
  const avgSpeed = 13.88888888888889;
  const distanceInMeters = distance * 1000;
  const timeInMinutes = time / 60;
  const distanceInMinutes = distanceInMeters / avgSpeed;
  if (distanceInMinutes < timeInMinutes) {
    return true;
  }
  return false;
};

export type GPSLocation = {
  lat: string;
  long: string;
};
/**
 * @description - This function checks if the distance between the current location and the last signed in location is feasible
 * @param location1 - The location of the user
 * @param location2 - The location of the last signed in location
 * @param lastVisitTime - The time of the last visit
 * @returns - A boolean indicating if the visit is feasible
 */
export const isFeasibleVisit = (
  location1: GPSLocation,
  location2: GPSLocation,
  lastVisitTime: Date
) => {
  const distanceBetweenCurrentLocationAndLastSignedInLocation = calcCrow(
    parseString(location1.lat),
    parseString(location1.long),
    parseString(location2.lat),
    parseString(location2.long)
  );
  const dateOfLastVisit = new Date(lastVisitTime);
  const dateOfCurrentVisit = new Date();

  const diffInSeconds = (dateOfCurrentVisit.getTime() - dateOfLastVisit.getTime()) / 1000;

  const isFeasible = isThisAFeasibleDistance(
    distanceBetweenCurrentLocationAndLastSignedInLocation,
    diffInSeconds
  );

  return isFeasible;
};
