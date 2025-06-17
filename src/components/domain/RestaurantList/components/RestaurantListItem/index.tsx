import { FC } from "react";
import { Restaurant } from "../../../../../model/entities";

import styles from "./styles.module.css";
import RestaurantSubTitle from "../../../RestaurantSubTitle";

interface Props {
  restaurant: Restaurant;
  position?: GeolocationPosition;
  onClick: (id: string) => void;
}

const RestaurantListItem: FC<Props> = ({ restaurant, position, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(restaurant.id)}>
      <div className={styles.preview}>
        <img
          src={`images/restaurants/${restaurant.id}.jpg`}
          alt={`Aperçu de ${restaurant.name}`}
        />
      </div>
      <p className={styles.name}>{restaurant.name}</p>
      <RestaurantSubTitle
        restaurant={restaurant}
        infoType="distance"
        position={position}
      />
    </div>
  );
};

export default RestaurantListItem;
