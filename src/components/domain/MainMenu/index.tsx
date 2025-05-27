import { FC, useCallback, useContext } from "react";
import Button from "../../ui/Button";

import styles from "./styles.module.css";
import { MainNavigationContext } from "../App";

type MainMenuButtonType =
  | "nearby"
  | "group"
  | "take_away"
  | "healthy"
  | "hungry"
  | "cheap"
  | "random"
  | "typed";

const MainMenu: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const handleButtonClicked = useCallback(
    (button: MainMenuButtonType) => {
      console.log("main menu button clicked");
      switch (button) {
        case "nearby":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "nearby",
          });
          break;
        case "typed":
          setNavigationState({ ...navigationState, currentScreen: "typed" });
          break;
        case "cheap":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "meal_price",
          });
          break;
        case "hungry":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "dish_size",
            currentDishSizeFilter: "big",
          });
          break;
        case "take_away":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "takeaway",
          });
          break;
        case "healthy":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "fatness",
          });
          break;
        case "group":
          setNavigationState({
            ...navigationState,
            currentScreen: "list",
            currentRestaurantFilter: "group",
          });
          break;
        default:
          setNavigationState({ ...navigationState, currentScreen: "list" });
      }
    },
    [navigationState, setNavigationState]
  );

  return (
    <div className={styles.container}>
      Je veux manger...
      <Button label="Pas loin" onClick={() => handleButtonClicked("nearby")} />
      <Button
        label="Avec du monde"
        onClick={() => handleButtonClicked("group")}
      />
      <Button
        label="A emporter"
        onClick={() => handleButtonClicked("take_away")}
      />
      <Button label="Pas cher" onClick={() => handleButtonClicked("cheap")} />
      <Button label="Healthy" onClick={() => handleButtonClicked("healthy")} />
      <Button
        label="J'ai la dalle"
        onClick={() => handleButtonClicked("hungry")}
      />
      <Button label="Au pif" onClick={() => handleButtonClicked("random")} />
      <Button
        label="Un truc typé..."
        onClick={() => handleButtonClicked("typed")}
      />
    </div>
  );
};

export default MainMenu;
