import React from "react";
import ParkItem from "../ParkItem/ParkItem";
import { Park } from "../../types";

interface Props {
  results: Park[];
  handleParkSelect(id: string): void;
  handleFavorite(id: string): void;
}

const ResultsList: React.FC<Props> = ({
  results,
  handleParkSelect,
  handleFavorite
}) => {
  const parkList = results.map(park => {
    return (
      <ParkItem
        key={park.id}
        parkId={park.id}
        parkThumbUrl={park.thumbUrl}
        parkName={park.name}
        parkIsFavorite={park.isFavorite}
        handleParkSelect={handleParkSelect}
        handleFavorite={handleFavorite}
      />
    );
  });

  return <div className="park__list">{parkList}</div>;
};

export default ResultsList;
