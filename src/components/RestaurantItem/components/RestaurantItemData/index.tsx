import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  label: string;
  value: string;
}

const RestaurantItemData: FC<Props> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.dataLabel}>{label}</p>
      <p className={styles.dataValue}>{value}</p>
    </div>
  );
};

export default RestaurantItemData;
