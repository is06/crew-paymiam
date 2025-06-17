import { FC, useState } from "react";
import Button from "../../../../ui/Button";

import styles from "./styles.module.css";

interface Props {
  onSelected: (isTakeaway: boolean) => void;
}

const TakeAwayFilter: FC<Props> = ({ onSelected }) => {
  const [isTakeAway, setIsTakeAway] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Button
        intent="ghost"
        selected={isTakeAway === false}
        label="Sur place"
        onClick={() => {
          onSelected(false);
          setIsTakeAway(false);
        }}
      />
      <Button
        intent="ghost"
        selected={isTakeAway === true}
        label="À emporter"
        onClick={() => {
          onSelected(true);
          setIsTakeAway(true);
        }}
      />
    </div>
  );
};

export default TakeAwayFilter;
