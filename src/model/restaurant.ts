import { RestaurantListFilterType } from "../components/domain/App";
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

export const getRestaurantsFromFilter = (
  filterType: RestaurantListFilterType | null,
  filterValue?: unknown,
  position?: GeolocationPosition
): Restaurant[] => {
  switch (filterType) {
    case "cuisine":
      return getRestaurantsByCuisineType(filterValue as CuisineTypeId);
    case "meal_price":
      return restaurants.filter((r) => r.mealPrices === "cheap");
    case "dish_size":
      return restaurants.filter((r) => r.dishesSize === "big");
    case "fatness":
      return restaurants.filter((r) => r.healthiness === "healthy");
    case "takeaway":
      return restaurants.filter((r) => r.hasTakeaway);
    case "group":
      return restaurants.filter((r) => r.size === "big");
    case "nearby":
      return getRestaurantsByLocation(
        position?.coords.latitude ?? 0,
        position?.coords.longitude ?? 0,
        500
      );
    default:
      return [];
  }
};
