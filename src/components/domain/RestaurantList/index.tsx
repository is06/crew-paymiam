import { FC, useContext, useEffect, useState } from "react";
import { Restaurant } from "../../../model/entities";
import { MainNavigationContext, MainNavigationScreenType } from "../App";
import {
  getRestaurantsByLocation,
  getRestaurantsFromFilter,
} from "../../../model/restaurant";
import RestaurantListItem from "./components/RestaurantListItem";

import styles from "./styles.module.css";
import {
  CuisineTypeId,
  cuisineTypes,
  getCuisineById,
} from "../../../data/cuisineTypes";

const RestaurantList: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (navigationState.currentRestaurantFilter === "nearby") {
      window.navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setRestaurants(
            getRestaurantsByLocation(
              position.coords.latitude,
              position.coords.longitude,
              500
            )
          );
        }
      );
    } else {
      setRestaurants(
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
      currentScreen: "details",
      detailsId: restaurantId,
    });
  };

  const title = navigationState.currentCuisineTypeFilter
    ? getCuisineById(navigationState.currentCuisineTypeFilter).label
    : "";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {restaurants.length === 0 && <div>Aucun restaurant</div>}
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
          subTitleInfoType={
            navigationState.currentRestaurantFilter === "nearby"
              ? "distance"
              : "default"
          }
          onClick={handleRestaurantClick}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
