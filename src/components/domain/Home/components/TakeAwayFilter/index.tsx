import { FC } from "react";
import Button from "../../../../ui/Button";

import styles from "./styles.module.css";

const TakeAwayFilter: FC = () => {
  return (
    <div className={styles.container}>
      <Button intent="ghost" selected={true} label="Sur place" />
      <Button intent="ghost" label="À emporter" />
    </div>
  );
};

export default TakeAwayFilter;
