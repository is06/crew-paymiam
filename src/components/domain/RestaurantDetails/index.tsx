import { FC, useCallback, useContext } from "react";
import { getRestaurantById } from "../../../model/restaurant";

import styles from "./styles.module.css";
import Button from "../../ui/Button";
import { MainNavigationContext } from "../App";
import RestaurantSubTitle from "../RestaurantSubTitle";

interface Props {
  restaurantId: string;
}

const RestaurantDetails: FC<Props> = ({ restaurantId }) => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const restaurant = getRestaurantById(restaurantId);

  const handleBackClicked = useCallback(() => {
    if (navigationState.previousState !== undefined) {
      setNavigationState(navigationState.previousState);
    }
  }, []);

  return (
    <div>
      <div className={styles.preview}>
        <img
          src={`images/restaurants/${restaurant.id}.jpg`}
          alt={`Aperçu de ${restaurant.name}`}
        />
        {navigationState.previousState && (
          <span className={styles.back}>
            <Button
              intent="accent"
              icon={"ui/back"}
              onClick={handleBackClicked}
            />
          </span>
        )}
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{restaurant.name}</h2>
        <RestaurantSubTitle
          restaurant={restaurant}
          infoType="distance"
          position={navigationState.geolocation}
        />
        <ul>
          <li>{restaurant.address}</li>
          <li>{restaurant.needReservation ? "Réservation recommandée" : ""}</li>
          <li>
            {restaurant.hasTakeaway
              ? "Possibilité de prendre à emporter"
              : "Uniquement sur place"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
