import { FC, useCallback, useContext, useEffect, useState } from "react";
import { Restaurant } from "../../../model/entities";
import { MainNavigationContext } from "../App";
import {
  getRestaurantsByLocation,
  getRestaurantsFromFilter,
} from "../../../model/restaurant";
import RestaurantListItem from "./components/RestaurantListItem";

import styles from "./styles.module.css";
import { getCuisineById } from "../../../data/cuisineTypes";
import Button from "../../ui/Button";

const RestaurantList: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const loadSortedRestaurants = useCallback(
    (restaurants: Restaurant[]) => {
      const list = restaurants
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
      setRestaurants(list);
    },
    [setRestaurants]
  );

  const handleBackClicked = useCallback(() => {
    if (navigationState.previousState !== undefined) {
      setNavigationState(navigationState.previousState);
    }
  }, []);

  useEffect(() => {
    if (navigationState.currentRestaurantFilter === "nearby") {
      window.navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          loadSortedRestaurants(
            getRestaurantsByLocation(
              position.coords.latitude,
              position.coords.longitude,
              500
            )
          );
        }
      );
    } else {
      loadSortedRestaurants(
        getRestaurantsFromFilter(
          navigationState.currentRestaurantFilter,
          navigationState.currentCuisineTypeFilter
        )
      );
    }
  }, [setRestaurants, navigationState]);

  const handleRestaurantClick = (restaurantId: string) => {
    setNavigationState({
      ...navigationState,
      previousState: navigationState,
      currentScreen: "details",
      detailsId: restaurantId,
    });
  };

  const title = navigationState.currentCuisineTypeFilter
    ? getCuisineById(navigationState.currentCuisineTypeFilter).label
    : "";

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {navigationState.previousState && (
          <span className={styles.back}>
            <Button
              intent="accent"
              icon={"ui/back"}
              onClick={handleBackClicked}
            />
          </span>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>
      {restaurants.length === 0 && <div>Aucun restaurant</div>}
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
          position={navigationState.geolocation}
          onClick={handleRestaurantClick}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
