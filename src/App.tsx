import { createContext, useState } from "react";
import "./App.css";
import MainMenu from "./components/domain/MainMenu";

export type MainNavigationScreenType =
  | "main_menu"
  | "by_cuisine_type"
  | "by_meal_size";

interface MainNavigationContextType {
  currentScreen: MainNavigationScreenType;
  setCurrentScreen: (screen: MainNavigationScreenType) => void;
}

export const MainNavigationContext = createContext<MainNavigationContextType>({
  currentScreen: "main_menu",
  setCurrentScreen: () => {},
});

function App() {
  const [currentScreen, setCurrentScreen] =
    useState<MainNavigationScreenType>("main_menu");

  return (
    <div className="App">
      <MainNavigationContext.Provider
        value={{ currentScreen, setCurrentScreen }}
      >
        {currentScreen === "main_menu" && <MainMenu />}
      </MainNavigationContext.Provider>
    </div>
  );
}

export default App;
