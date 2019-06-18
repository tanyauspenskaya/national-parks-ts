import icon from "../../assets/icons.svg";
import React from "react";
import { Park } from "../../types";

interface Props {
  park: Park;
  handleFavorite(park: Park): void;
}

const FavButton: React.FC<Props> = ({ park, handleFavorite }) => {
  const btnClass = park.isFavorite ? "green" : "grey";

  return (
    <button
      className={`park__btn park__btn--${btnClass}`}
      onClick={() => handleFavorite(park)}
    >
      <svg
        className="park__tree"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24.5 50"
      >
        <use xlinkHref={`${icon}#tree`} />
      </svg>
    </button>
  );
};

export default FavButton;
