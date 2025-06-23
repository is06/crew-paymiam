import { FC, useContext, useEffect, useState } from "react";
import TopCuisineTypesList from "./components/TopCuisineTypesList";
import TakeAwayFilter from "./components/TakeAwayFilter";
import Carousel from "./components/Carousel";
import { MainNavigationContext } from "../App";

const Home: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );
  const [isTakeAway, setIsTakeAway] = useState<boolean>(false);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setNavigationState({
          ...navigationState,
          geolocation: position,
        });
      },
      () => {
        const defaultPosition = {
          coords: {
            latitude: 48.8726871,
            longitude: 2.357652,
          },
        };
        setNavigationState({
          ...navigationState,
          geolocation: defaultPosition as any,
        });
      }
    );
  }, []);

  const handleTakeAwayFilterOptionSelected = (isTakeAway: boolean) => {
    setIsTakeAway(isTakeAway);
  };

  const handleRestaurantClicked = (id: string) => {
    setNavigationState({
      ...navigationState,
      previousState: navigationState,
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
        position={navigationState.geolocation}
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
