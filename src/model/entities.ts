import { CuisineTypeId } from "../data/cuisineTypes";

export interface Restaurant {
  name: string;
  address: string;
  location: Location;
  size: RestaurantSize;
  cuisineTypeId: CuisineTypeId;
  dishesSize: DishSize;
  mealPrices: MealPrice;
  needReservation: boolean;
  workDistrict: WorkDistrict;
}

export type RestaurantSize = "small" | "normal" | "big";

export type DishSize = "small" | "medium" | "big";

export type MealPrice = "cheap" | "normal" | "expensive";

export type WorkDistrict = "fsm" | "ufo";

export interface Location {
  lat: number;
  lng: number;
}

export interface CuisineType {
  id: CuisineTypeId;
  label: string;
}
