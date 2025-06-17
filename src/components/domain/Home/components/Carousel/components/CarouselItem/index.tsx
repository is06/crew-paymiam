import { FC } from "react";
import styles from "./styles.module.css";
import { Restaurant } from "../../../../../../../model/entities";
import { getDistanceFromLatLngInKm } from "../../../../../../../util/math";
import { cuisineTypes } from "../../../../../../../data/cuisineTypes";

export type RestaurantInfoType = "distance" | "default";

interface Props {
  item: Restaurant;
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

const CarouselItem: FC<Props> = ({
  item,
  subTitleInfoType,
  position,
  onClick,
}) => {
  const smallTitle = getSubTitle(item, subTitleInfoType, position);

  return (
    <div className={styles.container} onClick={() => onClick(item.id)}>
      <div className={styles.preview}>
        <img
          src={`images/restaurants/${item.id}.jpg`}
          alt={`Aperçu de ${item.name}`}
        />
      </div>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.subTitle}>{smallTitle}</p>
    </div>
  );
};

export default CarouselItem;
