import React from "react";

const ProgressBar: React.FC = () => {
  return (
    <div className="intro__progress progress">
      <div className="progress__box">
        <div className="progress__bar">
          <p className="progress__value">'visitedParks'</p>
        </div>
      </div>
      <p className="progress__label">
        <small>out of 'totalParks' parks visited</small>
      </p>
    </div>
  );
};

export default ProgressBar;
