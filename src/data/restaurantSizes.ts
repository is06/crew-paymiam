import { RestautantSizeType } from "../model/entities";

export const restautantSizes: RestautantSizeType[] = [
  {
    id: "small",
    label: "Pas beaucoup",
  },
  {
    id: "normal",
    label: "Normal",
  },
  {
    id: "big",
    label: "C'est grand",
  },
];

export const getRestaurantSizeById = (id: string): RestautantSizeType => {
  return restautantSizes.filter((s) => s.id === id)[0];
};
