import React from "react";
import ParkItem from "../ParkItem/ParkItem";

const VisitedList: React.FC = () => {
  const parkList = <ParkItem />;

  return (
    <>
      <h2 className="visited__title">VISITED PARKS</h2>
      <div className="park__list">{parkList}</div>
    </>
  );
};

export default VisitedList;
