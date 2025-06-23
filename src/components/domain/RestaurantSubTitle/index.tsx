import { FC } from "react";
import { Restaurant } from "../../../model/entities";
import { cuisineTypes } from "../../../data/cuisineTypes";
import { getDistanceFromLatLngInKm } from "../../../util/math";

import styles from "./styles.module.css";

const WALKING_SPEED = 3.5; // km/h

export type RestaurantInfoType = "distance" | "default";

interface Props {
  restaurant: Restaurant;
  infoType: RestaurantInfoType;
  position?: GeolocationPosition;
}

const RestaurantSubTitle: FC<Props> = ({ restaurant, infoType, position }) => {
  const cuisineLabel = cuisineTypes.filter(
    (type) => type.id === restaurant.cuisineTypeId
  )[0].label;

  let label = "";

  switch (infoType) {
    case "distance":
      const km = getDistanceFromLatLngInKm(
        restaurant.location.lat,
        restaurant.location.lng,
        position?.coords.latitude ?? 0,
        position?.coords.longitude ?? 0
      );
      const walkDuration = Math.round((km / WALKING_SPEED) * 60);

      label = `${cuisineLabel} - ${Math.round(
        km * 1000
      )} m - ${walkDuration} min`;
      break;
    default:
      label = cuisineLabel;
  }

  return <div className={styles.subTitle}>{label}</div>;
};

export default RestaurantSubTitle;
