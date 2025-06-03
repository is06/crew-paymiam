import { FC, useContext, useEffect, useState } from "react";
import { Restaurant } from "../../../model/entities";
import { MainNavigationContext } from "../App";
import {
  getRestaurantsByLocation,
  getRestaurantsFromFilter,
} from "../../../model/restaurant";

const RestaurantList: FC = () => {
  const { navigationState } = useContext(MainNavigationContext);

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

  return (
    <div>
      {restaurants.map((restautant) => (
        <div key={restautant.id}>{restautant.name}</div>
      ))}
    </div>
  );
};

export default RestaurantList;
