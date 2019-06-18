import React from "react";
import ParkItem from "../ParkItem/ParkItem";
import { Park } from "../../types";

interface Props {
  visited: Park[];
  handleParkSelect(park: Park): void;
  handleFavorite(park: Park): void;
}

const VisitedList: React.FC<Props> = ({
  visited,
  handleParkSelect,
  handleFavorite
}) => {
  const parkList = visited.map(park => {
    return (
      <ParkItem
        key={park.id}
        park={park}
        handleParkSelect={handleParkSelect}
        handleFavorite={handleFavorite}
      />
    );
  });

  return (
    <>
      <h2 className="visited__title">VISITED PARKS</h2>
      <div className="park__list">{parkList}</div>
    </>
  );
};

export default VisitedList;
