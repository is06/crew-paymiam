import { FC, ReactElement, useCallback, useContext } from "react";
import { getRestaurantById } from "../../../model/restaurant";

import styles from "./styles.module.css";
import Button from "../../ui/Button";
import { MainNavigationContext } from "../App";
import RestaurantSubTitle from "../RestaurantSubTitle";
import { DishSize, MealPrice } from "../../../model/entities";
import RestaurantDetailItem from "./components/RestaurantDetailItem";

interface Props {
  restaurantId: string;
}

const getPriceLabel = (mealPrice: MealPrice): string => {
  switch (mealPrice) {
    case "cheap":
      return "Pas cher";
    case "normal":
      return "Prix normaux";
    case "expensive":
      return "Prix assez chers";
  }
};

const getDishSizeLabel = (dishesSize: DishSize): string => {
  switch (dishesSize) {
    case "small":
      return "Petites portions";
    case "medium":
      return "Portions normales";
    case "big":
      return "Portions généreuses";
  }
};

const getReservationView = (needReservation: boolean): ReactElement => {
  if (needReservation) {
    return <RestaurantDetailItem text="Réservation recommandée" />;
  } else {
    return <></>;
  }
};

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

  const handleAddressClicked = useCallback(() => {
    if (restaurant.gmapID) {
      window.open(`https://maps.app.goo.gl/${restaurant.gmapID}`);
    }
  }, [restaurant]);

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
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{restaurant.name}</h2>
        <RestaurantSubTitle
          restaurant={restaurant}
          infoType="distance"
          position={navigationState.geolocation}
        />
      </div>
      <div className={styles.details}>
        <ul>
          <RestaurantDetailItem
            icon="ui/location"
            text={restaurant.address}
            onClick={handleAddressClicked}
          />
          {getReservationView(restaurant.needReservation)}
          <RestaurantDetailItem
            text={
              restaurant.hasTakeaway
                ? "Possibilité de prendre à emporter"
                : "Uniquement sur place"
            }
          />
          <RestaurantDetailItem
            text={getDishSizeLabel(restaurant.dishesSize)}
          />
          <RestaurantDetailItem
            icon="ui/money"
            text={getPriceLabel(restaurant.mealPrices)}
          />
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
