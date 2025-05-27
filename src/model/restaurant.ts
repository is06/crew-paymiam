import { CuisineTypeId } from "../data/cuisineTypes";
import { restaurants } from "../data/restaurants";
import { getDistanceFromLatLngInKm } from "../util/math";
import { Restaurant } from "./entities";

export const getRestaurantById = (id: string): Restaurant => {
  return restaurants.filter((r) => r.id === id)[0];
};

export const getRestaurantsByCuisineType = (
  cuisineTypeId: CuisineTypeId
): Restaurant[] => {
  return restaurants.filter((r) => r.cuisineTypeId === cuisineTypeId);
};

export const getRestaurantsByLocation = (
  lat: number,
  lng: number,
  maxDistance: number
): Restaurant[] => {
  return restaurants.filter((r) => {
    const distance = getDistanceFromLatLngInKm(
      lat,
      lng,
      r.location.lat,
      r.location.lng
    );
    return distance * 1000 < maxDistance;
  });
};
