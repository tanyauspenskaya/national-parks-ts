import React from "react";

const Tagline: React.FC = () => {
  return (
    <div className="intro__tagline tagline">
      <h1 className="tagline__title">
        DISCOVER
        <span className="tagline__subtitle">NATIONAL PARKS AND MONUMENTS</span>
      </h1>
      <p className="tagline__quote">
        I see my path, but I don't know where it leads.
        <span className="tagline__quote--line">
          Not knowing where I'm going is what inspires me to travel it.
        </span>
      </p>
    </div>
  );
};

export default Tagline;
