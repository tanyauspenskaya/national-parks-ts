import React from "react";
import ParkItem from "../ParkItem/ParkItem";

const ResultsList: React.FC = () => {
  const parkList = <ParkItem />;
  return <div className="park__list">{parkList}</div>;
};

export default ResultsList;
