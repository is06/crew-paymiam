import { FC, useCallback, useContext } from "react";
import Button from "../../ui/Button";
import { MainNavigationContext } from "../../../App";

type MainMenuButtonType = "close" | "group" | "take_away" | "cheap" | "random";

const MainMenu: FC = () => {
  const { currentScreen, setCurrentScreen } = useContext(MainNavigationContext);

  const handleButtonClicked = useCallback((button: MainMenuButtonType) => {
    setCurrentScreen("by_meal_size");
  }, []);

  return (
    <div>
      Je veux manger...
      <Button label="Pas loin" onClick={() => handleButtonClicked("close")} />
      <Button
        label="Avec du monde"
        onClick={() => handleButtonClicked("group")}
      />
      <Button
        label="A emporter"
        onClick={() => handleButtonClicked("take_away")}
      />
      <Button label="Pas cher" onClick={() => handleButtonClicked("cheap")} />
      <Button label="Au pif" onClick={() => handleButtonClicked("random")} />
    </div>
  );
};

export default MainMenu;
