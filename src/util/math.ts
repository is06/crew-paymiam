/**
 * Compute distance between two points in km using haversine formula
 * @param lat1 number
 * @param lng1 number
 * @param lat2 number
 * @param lng2 number
 * @returns number
 */
export const getDistanceFromLatLngInKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

/**
 * Returns the radian value of an angle in degrees
 * @param deg number
 * @returns number
 */
const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};
