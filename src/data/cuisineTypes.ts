import { CuisineType } from "../model/entities";

export type CuisineTypeId =
  | "italian"
  | "indian"
  | "bistrot"
  | "burger"
  | "sushi"
  | "chinese";

export const cuisineTypes: CuisineType[] = [
  {
    id: "italian",
    label: "Italien",
  },
  {
    id: "indian",
    label: "Indian",
  },
  {
    id: "bistrot",
    label: "Bistrot",
  },
  {
    id: "bistrot",
    label: "Burger",
  },
  {
    id: "sushi",
    label: "Sushi",
  },
  {
    id: "chinese",
    label: "Chinois",
  },
];
