import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export type ButtonIntent = "primary" | "support" | "ghost";
interface Props {
  intent: ButtonIntent;
  selected?: boolean;
  label: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ intent, selected, label, onClick }) => {
  let classes = [styles.container];

  if (selected === true) {
    classes.push(styles.selected);
  }

  classes.push(styles[intent]);

  return (
    <button onClick={onClick} className={classNames(...classes)}>
      {label}
    </button>
  );
};

export default Button;
