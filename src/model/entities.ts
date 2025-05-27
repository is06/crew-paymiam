import { CuisineTypeId } from "../data/cuisineTypes";

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  location: Location;
  size: RestaurantSize;
  cuisineTypeId: CuisineTypeId;
  dishesSize: DishSize;
  mealPrices: MealPrice;
  healthiness: Healthiness;
  needReservation: boolean;
  workDistrict: WorkDistrict;
  hasTakeaway: boolean;
}

export type RestaurantSize = "small" | "normal" | "big";

export type DishSize = "small" | "medium" | "big";

export type MealPrice = "cheap" | "normal" | "expensive";

export type WorkDistrict = "fsm" | "ufo";

export type Healthiness = "healthy" | "normal" | "fat";

export interface Location {
  lat: number;
  lng: number;
}

export interface RestautantSizeType {
  id: RestaurantSize;
  label: string;
}

export interface DishSizeType {
  id: DishSize;
  label: string;
}

export interface MealPriceType {
  id: MealPrice;
  label: string;
}

export interface WorkDistrictType {
  id: WorkDistrict;
  label: string;
}

export interface CuisineType {
  id: CuisineTypeId;
  label: string;
}

export interface HealthinessType {
  id: Healthiness;
  label: string;
}
