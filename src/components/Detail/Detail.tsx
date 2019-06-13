import icon from "../../assets/icons.svg";
import React from "react";
import FavButton from "../FavButton/FavButton";

const Detail: React.FC = () => {
  const selected = {
    photoUrl: "",
    name: "canyon",
    fullName: "grand canyon",
    designation: "national Park",
    description: "some description",
    states: "AZ, NV",
    url: "#",
    weatherInfo: "33"
  };

  return (
    <div className="detail__view">
      <div className="detail__visuals">
        <div className="detail__image">
          <img src={selected.photoUrl} alt={selected.fullName} />
        </div>
        <div className="detail__map">
          {/* <ParkMap 
              lat={parseInt(selected.lat)}
              long={parseInt(selected.long)}
              isMarkerShown
            /> */}
          Park Map
        </div>
      </div>
      <div className="detail__content">
        <div className="detail__main">
          <h2 className="detail__title">
            {selected.name}
            <FavButton />
          </h2>
          <h4 className="detail__subtitle">{selected.designation}</h4>
          <p className="detail__paragraph">{selected.description}</p>
          <div className="detail__info">
            <div className="detail__info-item detail__info-item--temperature">
              {/* <ParkWeather
                lat={parseInt(selected.lat)}
                long={parseInt(selected.long)}
              /> */}
              Park Weather
              <p className="detail__info-desc">Temperature</p>
            </div>
            <div className="detail__info-item detail__info-item--state">
              <span className="detail__info-val">{selected.states}</span>
              <p className="detail__info-desc">State</p>
            </div>
            <div className="detail__info-item detail__info-item--nps">
              <a
                className="detail__info-npslink"
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="detail__npslink-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <use xlinkHref={icon + "#link"} />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="detail__weather">
          <h4 className="detail__subtitle">Weather info</h4>
          <p className="detail__paragraph">{selected.weatherInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
