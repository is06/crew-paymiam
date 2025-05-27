import { DishSizeType } from "../model/entities";

export const dishSizes: DishSizeType[] = [
  {
    id: "small",
    label: "Frugaux",
  },
  {
    id: "medium",
    label: "Normaux",
  },
  {
    id: "big",
    label: "Copieux",
  },
];

export const getDishSizeById = (id: string): DishSizeType => {
  return dishSizes.filter((d) => d.id === id)[0];
};
