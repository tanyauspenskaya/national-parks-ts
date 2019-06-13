import icon from "../../assets/icons.svg";
import React from "react";

const FavButton: React.FC = () => {
  const btnClass = "park__btn--green";

  return (
    <button className={"park__btn " + btnClass}>
      <svg
        className="park__tree"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24.5 50"
      >
        <use xlinkHref={icon + "#tree"} />
      </svg>
    </button>
  );
};

export default FavButton;
