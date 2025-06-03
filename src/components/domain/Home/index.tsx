import { FC, useContext, useEffect, useState } from "react";
import TopCuisineTypesList from "./components/TopCuisineTypesList";
import TakeAwayFilter from "./components/TakeAwayFilter";
import Carousel from "./components/Carousel";
import { MainNavigationContext } from "../App";

const Home: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const [position, setPosition] = useState<GeolocationPosition | undefined>(
    undefined
  );

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setPosition(position);
      }
    );
  }, [setPosition]);

  const handleRestaurantClicked = (id: string) => {
    setNavigationState({
      ...navigationState,
      currentScreen: "details",
      detailsId: id,
    });
  };

  return (
    <div>
      <TakeAwayFilter />
      <TopCuisineTypesList />
      <Carousel
        title="Pas loin"
        filter="nearby"
        position={position}
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="J'ai la dalle"
        filter="dish_size"
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="Petites bourses"
        filter="meal_price"
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="A emporter"
        filter="takeaway"
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="On est nombreux"
        filter="group"
        onRestaurantClick={handleRestaurantClicked}
      />
    </div>
  );
};

export default Home;
