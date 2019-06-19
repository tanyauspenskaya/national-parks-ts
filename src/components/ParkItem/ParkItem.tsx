import React from "react";
import FavButton from "../FavButton/FavButton";

interface Props {
  parkId: string;
  parkThumbUrl: string;
  parkName: string;
  parkIsFavorite: boolean;
  handleParkSelect(id: string): void;
  handleFavorite(id: string): void;
}

const ParkItem: React.FC<Props> = ({
  parkId,
  parkThumbUrl,
  parkName,
  parkIsFavorite,
  handleParkSelect,
  handleFavorite
}) => {
  const bgImageStyle = `linear-gradient(rgba(38,38,38,.8),rgba(38,38,38,.8)), url(${parkThumbUrl})`;

  return (
    <div className="park__item" style={{ backgroundImage: bgImageStyle }}>
      <FavButton
        parkId={parkId}
        parkIsFavorite={parkIsFavorite}
        handleFavorite={handleFavorite}
      />
      <h3 className="park__title">
        <a
          className="park__explore"
          href="#detail"
          onClick={() => handleParkSelect(parkId)}
        >
          {parkName}
        </a>
      </h3>
    </div>
  );
};

export default ParkItem;
