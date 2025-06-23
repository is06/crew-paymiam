import { FC } from "react";
import styles from "./styles.module.css";
import { Restaurant } from "../../../../../../../model/entities";
import RestaurantSubTitle, {
  RestaurantInfoType,
} from "../../../../../RestaurantSubTitle";

interface Props {
  item: Restaurant;
  subTitleInfoType: RestaurantInfoType;
  position?: GeolocationPosition;
  onClick: (id: string) => void;
}

const CarouselItem: FC<Props> = ({
  item,
  subTitleInfoType,
  position,
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={() => onClick(item.id)}>
      <div className={styles.preview}>
        <img
          src={`images/restaurants/${item.id}.jpg`}
          alt={`Aperçu de ${item.name}`}
        />
      </div>
      <p className={styles.name}>{item.name}</p>
      <RestaurantSubTitle
        restaurant={item}
        infoType={subTitleInfoType}
        position={position}
      />
    </div>
  );
};

export default CarouselItem;
