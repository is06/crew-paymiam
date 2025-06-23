import { FC, createContext, useCallback, useState } from "react";
import styles from "./styles.module.css";
import CuisineTypeList from "../CuisineTypeList";
import { CuisineTypeId } from "../../../data/cuisineTypes";
import RestaurantList from "../RestaurantList";
import { DishSize } from "../../../model/entities";
import Home from "../Home";
import RestaurantDetails from "../RestaurantDetails";

export type MainNavigationScreenType =
  | "home"
  | "cuisine_types"
  | "list"
  | "details";

export type RestaurantListFilterType =
  | "cuisine"
  | "dish_size"
  | "meal_price"
  | "takeaway"
  | "fatness"
  | "group"
  | "nearby";

interface MainNavigationState {
  currentScreen: MainNavigationScreenType;
  currentRestaurantFilter: RestaurantListFilterType | null;
  currentCuisineTypeFilter: CuisineTypeId | null;
  currentDishSizeFilter: DishSize | null;
  detailsId: string | null;
  geolocation: GeolocationPosition | undefined;
  previousState: MainNavigationState | undefined;
}

interface MainNavigationContextType {
  navigationState: MainNavigationState;
  setNavigationState: (state: MainNavigationState) => void;
}

const defaultNavigationState: MainNavigationState = {
  currentScreen: "home",
  currentRestaurantFilter: null,
  currentCuisineTypeFilter: null,
  currentDishSizeFilter: null,
  detailsId: null,
  geolocation: undefined,
  previousState: undefined,
};

export const MainNavigationContext = createContext<MainNavigationContextType>({
  navigationState: defaultNavigationState,
  setNavigationState: () => {},
});

const App: FC = () => {
  const [navigationState, setNavigationState] = useState<MainNavigationState>(
    defaultNavigationState
  );

  const handleLogoClicked = useCallback(() => {
    setNavigationState({
      ...navigationState,
      currentScreen: "home",
      currentRestaurantFilter: null,
      currentCuisineTypeFilter: null,
      currentDishSizeFilter: null,
      detailsId: null,
    });
  }, [navigationState, setNavigationState]);

  const handleCuisineTypeClicked = useCallback(
    (cuisineType: CuisineTypeId) => {
      setNavigationState({
        ...navigationState,
        previousState: navigationState,
        currentScreen: "list",
        currentRestaurantFilter: "cuisine",
        currentCuisineTypeFilter: cuisineType,
      });
    },
    [navigationState, setNavigationState]
  );

  return (
    <div className={styles.container}>
      <p className={styles.logo} onClick={handleLogoClicked}>
        Crew{" "}
        <span className={styles.text}>
          <span>Pay</span> <img src="logo192.png" alt="" /> <span>Miam</span>
        </span>
      </p>
      <MainNavigationContext.Provider
        value={{ navigationState, setNavigationState }}
      >
        {navigationState.currentScreen === "home" && <Home />}
        {navigationState.currentScreen === "cuisine_types" && (
          <CuisineTypeList onCuisineTypeClicked={handleCuisineTypeClicked} />
        )}
        {navigationState.currentScreen === "list" && <RestaurantList />}
        {navigationState.currentScreen === "details" &&
          navigationState.detailsId && (
            <RestaurantDetails restaurantId={navigationState.detailsId} />
          )}
      </MainNavigationContext.Provider>
    </div>
  );
};

export default App;
