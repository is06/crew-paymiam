import { FC } from "react";
import styles from "./styles.module.css";
import CarouselItem from "./components/CarouselItem";
import { getRestaurantsFromFilter } from "../../../../../model/restaurant";
import { RestaurantListFilterType } from "../../../App";

interface Props {
  title: string;
  filter: RestaurantListFilterType;
  position?: GeolocationPosition;
  onRestaurantClick: (id: string) => void;
}

const Carousel: FC<Props> = ({
  title,
  filter,
  position,
  onRestaurantClick,
}) => {
  const restaurants = getRestaurantsFromFilter(filter, undefined, position)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <>
      {restaurants.length > 0 && (
        <div className={styles.container}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.hScroll}>
            <div className={styles.itemContainer}>
              {restaurants.map((item) => (
                <CarouselItem
                  key={item.id}
                  item={item}
                  subTitleInfoType={
                    filter === "nearby" ? "distance" : "default"
                  }
                  position={position}
                  onClick={onRestaurantClick}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
