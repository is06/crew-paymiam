import { FC } from "react";
import { CuisineTypeId, cuisineTypes } from "../../../data/cuisineTypes";
import styles from "./styles.module.css";
import CuisineTypeButton from "../Home/components/TopCuisineTypesList/components/CuisineTypeButton";

interface Props {
  onCuisineTypeClicked: (cuisineType: CuisineTypeId) => void;
}

const CuisineTypeList: FC<Props> = ({ onCuisineTypeClicked }) => {
  return (
    <div className={styles.container}>
      <h2>Toutes les cuisines</h2>
      <div className={styles.list}>
        {cuisineTypes
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((cuisineType) => (
            <div key={`cuisine_type_${cuisineType.id}`} className={styles.item}>
              <div>
                <CuisineTypeButton
                  label={cuisineType.label}
                  icon={cuisineType.id}
                  isBig={false}
                  onClick={() => onCuisineTypeClicked(cuisineType.id)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CuisineTypeList;
