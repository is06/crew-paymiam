import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  label: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {label}
    </button>
  );
};

export default Button;
