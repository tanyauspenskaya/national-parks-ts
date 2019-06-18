import React from "react";
import { Park } from "../../types";

interface Props {
  appData: { [key: string]: Park };
}

const ProgressBar: React.FC<Props> = ({ appData }) => {
  const visitedParksNumber = Object.values(appData).filter(park => {
    return park.isFavorite;
  }).length;

  let totalParksNumber: number = 0;
  Object.values(appData).forEach(park => {
    totalParksNumber++;
  });

  return (
    <div className="intro__progress progress">
      <div className="progress__box">
        <div className="progress__bar">
          <p className="progress__value">{visitedParksNumber}</p>
        </div>
      </div>
      <p className="progress__label">
        <small>out of {totalParksNumber} parks visited</small>
      </p>
    </div>
  );
};

export default ProgressBar;
