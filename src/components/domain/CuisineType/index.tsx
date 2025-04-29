import { FC } from "react";

interface Props {
  name: string;
  label: string;
  onClick: () => void;
}

const CuisineTypeView: FC<Props> = ({ name, label, onClick }) => {
  return <div onClick={onClick}>{label}</div>;
};

export default CuisineTypeView;
