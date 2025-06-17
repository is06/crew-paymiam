import { FC } from "react";
import { Restaurant } from "../../../../../model/entities";
import { RestaurantInfoType } from "../../../Home/components/Carousel/components/CarouselItem";

import styles from "./styles.module.css";
import { getDistanceFromLatLngInKm } from "../../../../../util/math";
import { cuisineTypes } from "../../../../../data/cuisineTypes";

interface Props {
  restaurant: Restaurant;
  subTitleInfoType: RestaurantInfoType;
  position?: GeolocationPosition;
  onClick: (id: string) => void;
}

const getSubTitle = (
  restaurant: Restaurant,
  infoType: RestaurantInfoType,
  position?: GeolocationPosition
) => {
  const cuisineLabel = cuisineTypes.filter(
    (type) => type.id === restaurant.cuisineTypeId
  )[0].label;

  switch (infoType) {
    case "distance":
      const km = getDistanceFromLatLngInKm(
        restaurant.location.lat,
        restaurant.location.lng,
        position?.coords.latitude ?? 0,
        position?.coords.longitude ?? 0
      );
      return `${cuisineLabel} - ${Math.round(km * 1000)} m`;
    default:
      return cuisineLabel;
  }
};

const RestaurantListItem: FC<Props> = ({
  restaurant,
  subTitleInfoType,
  position,
}) => {
  const smallTitle = getSubTitle(restaurant, subTitleInfoType, position);

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img
          src={`images/restaurants/${restaurant.id}.jpg`}
          alt={`Aperçu de ${restaurant.name}`}
        />
      </div>
      <p className={styles.name}>{restaurant.name}</p>
      <p className={styles.subTitle}>{smallTitle}</p>
    </div>
  );
};

export default RestaurantListItem;
