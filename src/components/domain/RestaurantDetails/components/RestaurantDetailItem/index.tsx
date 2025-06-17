import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  icon?: string;
  text: string;
}

const RestaurantDetailItem: FC<Props> = ({ icon, text }) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.listIcon}>
        {icon && <img src={`images/${icon}.png`} alt="" />}
      </span>
      <span className={styles.listValue}>{text}</span>
    </li>
  );
};

export default RestaurantDetailItem;
