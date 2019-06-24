import icon from "../../assets/icons.svg";
import React from "react";
import FavButton from "../FavButton/FavButton";
import ParkMap from "../ParkMap/ParkMap";
import ParkWeather from "../ParkWeather/ParkWeather";
import { Park } from "../../types";

interface Props {
  selectedPark: Park | null;
  handleFavorite(id: string): void;
}

const Detail: React.FC<Props> = ({ selectedPark, handleFavorite }) => {
  if (!selectedPark) {
    return null;
  }

  return (
    <div className="detail__view">
      <div className="detail__visuals">
        <div className="detail__image">
          <img src={selectedPark.photoUrl} alt={selectedPark.fullName} />
        </div>
        <div className="detail__map">
          <ParkMap
            lat={selectedPark.lat}
            lng={selectedPark.long}
            isMarkerShown
          />
        </div>
      </div>
      <div className="detail__content">
        <div className="detail__main">
          <h2 className="detail__title">
            {selectedPark.name}
            <FavButton
              parkId={selectedPark.id}
              parkIsFavorite={selectedPark.isFavorite}
              handleFavorite={handleFavorite}
            />
          </h2>
          <h4 className="detail__subtitle">{selectedPark.designation}</h4>
          <p className="detail__paragraph">{selectedPark.description}</p>
          <div className="detail__info">
            <div className="detail__info-item detail__info-item--temperature">
              <ParkWeather lat={selectedPark.lat} lng={selectedPark.long} />
              <p className="detail__info-desc">Temperature</p>
            </div>
            <div className="detail__info-item detail__info-item--state">
              <span className="detail__info-val">{selectedPark.states}</span>
              <p className="detail__info-desc">State</p>
            </div>
            <div className="detail__info-item detail__info-item--nps">
              <a
                className="detail__info-npslink"
                href={selectedPark.url}
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
          <p className="detail__paragraph">{selectedPark.weatherInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
