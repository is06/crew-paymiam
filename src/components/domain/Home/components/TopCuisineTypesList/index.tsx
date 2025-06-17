import { FC, useCallback, useContext } from "react";
import {
  CuisineTypeId,
  getCuisineById,
} from "../../../../../data/cuisineTypes";
import CuisineTypeButton from "../CuisineTypeButton";
import { MainNavigationContext } from "../../../App";

import styles from "./styles.module.css";

const topCuisineTypes: CuisineTypeId[] = [
  "chinese",
  "bistrot",
  "burger",
  "sushi",
  "italian",
];

const TopCuisineTypesList: FC = () => {
  const { navigationState, setNavigationState } = useContext(
    MainNavigationContext
  );

  const handleButtonClick = useCallback(
    (category: string) => {
      setNavigationState({
        ...navigationState,
        currentScreen: "list",
        currentRestaurantFilter: "cuisine",
        currentCuisineTypeFilter: category as CuisineTypeId,
      });
    },
    [navigationState, setNavigationState]
  );

  return (
    <div className={styles.container}>
      {topCuisineTypes.map((cuisineType, index) => (
        <CuisineTypeButton
          label={getCuisineById(cuisineType).label}
          icon={cuisineType}
          key={cuisineType}
          isBig={index < 2}
          onClick={() => handleButtonClick(cuisineType)}
        />
      ))}
      <CuisineTypeButton
        label="Plus"
        icon="more"
        isBig={false}
        onClick={() => handleButtonClick("more")}
      />
    </div>
  );
};

export default TopCuisineTypesList;
