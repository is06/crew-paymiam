import { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  icon?: string;
  text: string;
  onClick?: () => void;
}

const RestaurantDetailItem: FC<Props> = ({ icon, text, onClick }) => {
  return (
    <li className={styles.listItem} onClick={onClick}>
      <span className={styles.listIcon}>
        {icon && <img src={`images/${icon}.png`} alt="" />}
      </span>
      <span className={styles.listValue}>{text}</span>
    </li>
  );
};

export default RestaurantDetailItem;
