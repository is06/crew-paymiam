import { FC } from "react";
import Button from "../../ui/Button";
import { CuisineTypeId, cuisineTypes } from "../../../data/cuisineTypes";
import styles from "./styles.module.css";

interface Props {
  onCuisineTypeClicked: (cuisineType: CuisineTypeId) => void;
}

const CuisineTypeList: FC<Props> = ({ onCuisineTypeClicked }) => {
  return (
    <div className={styles.container}>
      {/*cuisineTypes
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((cuisineType) => (
          <Button
            key={cuisineType.id}
            label={cuisineType.label}
            onClick={() => onCuisineTypeClicked(cuisineType.id)}
          />
        ))*/}
    </div>
  );
};

export default CuisineTypeList;
