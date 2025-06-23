import { CuisineType } from "../model/entities";

export type CuisineTypeId =
  | "italian"
  | "indian"
  | "bistrot"
  | "burger"
  | "sushi"
  | "chinese"
  | "oriental"
  | "african"
  | "mexican";

export const cuisineTypes: CuisineType[] = [
  {
    id: "italian",
    label: "Italien",
  },
  {
    id: "indian",
    label: "Indien",
  },
  {
    id: "bistrot",
    label: "Bistrot",
  },
  {
    id: "burger",
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
  {
    id: "oriental",
    label: "Oriental",
  },
  {
    id: "african",
    label: "Africain",
  },
  {
    id: "mexican",
    label: "Mexicain",
  },
];

export const getCuisineById = (id: string): CuisineType => {
  return cuisineTypes.filter((c) => c.id === id)[0];
};
