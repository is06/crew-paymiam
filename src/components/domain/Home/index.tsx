import { FC } from "react";
import TopCuisineTypesList from "./components/TopCuisineTypesList";
import Button from "../../ui/Button";
import TakeAwayFilter from "./components/TakeAwayFilter";

const Home: FC = () => {
  return (
    <div>
      <TakeAwayFilter />
      <TopCuisineTypesList />
    </div>
  );
};

export default Home;
