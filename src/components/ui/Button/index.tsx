import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export type ButtonIntent = "primary" | "support" | "accent" | "ghost";
interface Props {
  intent: ButtonIntent;
  selected?: boolean;
  label?: string;
  icon?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ intent, selected, label, icon, onClick }) => {
  let classes = [styles.container];

  if (selected === true) {
    classes.push(styles.selected);
  }

  classes.push(styles[intent]);

  if (icon) {
    classes.push(styles.iconButton);
  }

  return (
    <button onClick={onClick} className={classNames(...classes)}>
      {label}
      {icon && (
        <img
          src={`images/${icon}.png`}
          alt="Retour"
          style={{ width: "1.5em", height: "1.5em" }}
        />
      )}
    </button>
  );
};

export default Button;
