import React from "react";
import FavButton from "../FavButton/FavButton";
import { Park } from "../../types";

interface Props {
  park: Park;
  handleParkSelect(park: Park): void;
}

const ParkItem: React.FC<Props> = ({ park, handleParkSelect }) => {
  const bgImageStyle = `linear-gradient(rgba(38,38,38,.8),rgba(38,38,38,.8)), url(${
    park.thumbUrl
  })`;

  return (
    <div className="park__item" style={{ backgroundImage: bgImageStyle }}>
      <FavButton />
      <h3 className="park__title">
        <a
          className="park__explore"
          href="#detail"
          onClick={() => handleParkSelect(park)}
        >
          {park.name}
        </a>
      </h3>
    </div>
  );
};

export default ParkItem;
