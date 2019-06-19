import icon from "../../assets/icons.svg";
import React from "react";

interface Props {
  parkId: string;
  parkIsFavorite: boolean;
  handleFavorite(id: string): void;
}

const FavButton: React.FC<Props> = ({
  parkId,
  parkIsFavorite,
  handleFavorite
}) => {
  const btnClass = parkIsFavorite ? "green" : "grey";

  return (
    <button
      className={`park__btn park__btn--${btnClass}`}
      onClick={() => handleFavorite(parkId)}
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
