import { FC } from "react";
import styles from "./styles.module.css";
import { Restaurant } from "../../../../../../../model/entities";

interface Props {
  item: Restaurant;
  onClick: (id: string) => void;
}

const CarouselItem: FC<Props> = ({ item, onClick }) => {
  const smallTitle = "Small title";

  return (
    <div className={styles.container} onClick={() => onClick(item.id)}>
      <div className={styles.preview}>
        <img src="" alt="" />
      </div>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.subTitle}>{smallTitle}</p>
    </div>
  );
};

export default CarouselItem;
