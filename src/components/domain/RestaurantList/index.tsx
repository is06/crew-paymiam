import { FC, useContext, useEffect, useState } from "react";
import { Restaurant } from "../../../model/entities";
import { CuisineTypeId } from "../../../data/cuisineTypes";
import { MainNavigationContext, RestaurantListFilterType } from "../App";
import {
  getRestaurantsByCuisineType,
  getRestaurantsByLocation,
} from "../../../model/restaurant";
import { restaurants } from "../../../data/restaurants";

const getRestaurantsFromFilter = (
  filterType: RestaurantListFilterType | null,
  filterValue?: unknown
): Restaurant[] => {
  switch (filterType) {
    case "cuisine":
      return getRestaurantsByCuisineType(filterValue as CuisineTypeId);
    case "meal_price":
      return restaurants.filter((r) => r.mealPrices === "cheap");
    case "dish_size":
      return restaurants.filter((r) => r.dishesSize === "big");
    case "fatness":
      return restaurants.filter((r) => r.healthiness === "healthy");
    case "takeaway":
      return restaurants.filter((r) => r.hasTakeaway);
    case "group":
      return restaurants.filter((r) => r.size === "big");
    default:
      return [];
  }
};

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
