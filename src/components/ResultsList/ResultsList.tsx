import React from "react";
import ParkItem from "../ParkItem/ParkItem";
import { Park } from "../../types";

interface Props {
  results: Park[];
}

const ResultsList: React.FC<Props> = ({ results }) => {
  const parkList = results.map(park => {
    return <ParkItem key={park.id} park={park} />;
  });

  return <div className="park__list">{parkList}</div>;
};

export default ResultsList;
