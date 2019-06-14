import React from "react";
import ParkItem from "../ParkItem/ParkItem";
import { Park } from "../../types";

interface Props {
  results: Park[];
  handleParkSelect(park: Park): void;
}

const ResultsList: React.FC<Props> = ({ results, handleParkSelect }) => {
  const parkList = results.map(park => {
    return (
      <ParkItem key={park.id} park={park} handleParkSelect={handleParkSelect} />
    );
  });

  return <div className="park__list">{parkList}</div>;
};

export default ResultsList;
