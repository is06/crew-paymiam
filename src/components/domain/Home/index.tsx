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
  const [isTakeAway, setIsTakeAway] = useState<boolean>(false);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setPosition(position);
      }
    );
  }, [setPosition]);

  const handleTakeAwayFilterOptionSelected = (isTakeAway: boolean) => {
    setIsTakeAway(isTakeAway);
  };

  const handleRestaurantClicked = (id: string) => {
    setNavigationState({
      ...navigationState,
      currentScreen: "details",
      detailsId: id,
    });
  };

  return (
    <div>
      <TakeAwayFilter onSelected={handleTakeAwayFilterOptionSelected} />
      <TopCuisineTypesList />
      <Carousel
        title="Pas loin"
        filter="nearby"
        position={position}
        isTakeAway={isTakeAway}
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="J'ai la dalle"
        filter="dish_size"
        isTakeAway={isTakeAway}
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="Petites bourses"
        filter="meal_price"
        isTakeAway={isTakeAway}
        onRestaurantClick={handleRestaurantClicked}
      />
      <Carousel
        title="On est nombreux"
        filter="group"
        isTakeAway={isTakeAway}
        onRestaurantClick={handleRestaurantClicked}
      />
    </div>
  );
};

export default Home;
