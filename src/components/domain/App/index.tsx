import { FC, createContext, useCallback, useState } from "react";
import styles from "./styles.module.css";
import MainMenu from "../MainMenu";
import CuisineTypeList from "../CuisineTypeList";
import { CuisineTypeId } from "../../../data/cuisineTypes";
import RestaurantList from "../RestaurantList";
import { DishSize } from "../../../model/entities";
import Home from "../Home";

export type MainNavigationScreenType =
  | "home"
  | "main_menu"
  | "cuisine_types"
  | "list"
  | "details"
  | "typed"
  | "roulette";

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
        Crew PayMiam
      </p>
      <MainNavigationContext.Provider
        value={{ navigationState, setNavigationState }}
      >
        {navigationState.currentScreen === "home" && <Home />}
        {navigationState.currentScreen === "main_menu" && <MainMenu />}
        {navigationState.currentScreen === "cuisine_types" && (
          <CuisineTypeList onCuisineTypeClicked={handleCuisineTypeClicked} />
        )}
        {navigationState.currentScreen === "list" && <RestaurantList />}
        {navigationState.currentScreen === "typed" && (
          <CuisineTypeList onCuisineTypeClicked={handleCuisineTypeClicked} />
        )}
      </MainNavigationContext.Provider>
    </div>
  );
};

export default App;
