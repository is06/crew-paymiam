import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  label: string;
  icon: string;
  isBig: boolean;
  onClick?: () => void;
}

const CuisineTypeButton: FC<Props> = ({ label, icon, isBig, onClick }) => {
  if (isBig) {
    return (
      <button className={styles.bigContainer} onClick={onClick}>
        <span className={styles.bigIcon}>
          <img src={`images/cuisines/icons/${icon}.png`} alt="" />
        </span>
        <span className={styles.label}>{label}</span>
      </button>
    );
  }

  return (
    <button className={styles.container} onClick={onClick}>
      <span className={styles.smallIcon}>
        <img src={`images/cuisines/icons/${icon}.png`} alt="" />
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default CuisineTypeButton;
