import { FC } from "react";
import { getCuisineById } from "../../../data/cuisineTypes";
import { getDishSizeById } from "../../../data/dishSizes";
import { getRestaurantSizeById } from "../../../data/restaurantSizes";
import styles from "./styles.module.css";
import RestaurantItemData from "./components/RestaurantItemData";
import { getRestaurantById } from "../../../model/restaurant";

interface Props {
  id: string;
}

const RestautantItem: FC<Props> = ({ id }) => {
  const restaurant = getRestaurantById(id);
  const cuisine = getCuisineById(restaurant.cuisineTypeId);
  const size = getRestaurantSizeById(restaurant.size);
  const dishSize = getDishSizeById(restaurant.dishesSize);

  return (
    <div>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h2 className={styles.title}>
          <div>{restaurant.name}</div>
          <small>{cuisine.label}</small>
        </h2>
        <RestaurantItemData label="Quantités" value={dishSize.label} />
        <RestaurantItemData label="Espace" value={size.label} />
        <RestaurantItemData
          label="Besoin de réserver ?"
          value={restaurant.needReservation ? "Oui" : "Non"}
        />
        <RestaurantItemData label="Adresse" value={restaurant.address} />
      </div>
    </div>
  );
};

export default RestautantItem;
