import markerIcon from "./mapMarker.svg";
import { compose, withProps } from "recompose";
import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import mapStyles from "./mapStyles.json";
import { KEY } from "./mapKey";

const mapSetup = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `12rem` }} />,
  mapElement: <div style={{ height: `100%` }} />
};

const mapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  styles: mapStyles
};

interface Props {
  lat: number;
  lng: number;
  isMarkerShown: boolean;
}

const ParkMap = compose<Props, Props>(
  withProps(mapSetup),
  withScriptjs,
  withGoogleMap
)(({ lat, lng, isMarkerShown }) => {
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat, lng }}
      center={{ lat, lng }}
      defaultOptions={mapOptions}
    >
      {isMarkerShown && (
        <Marker position={{ lat, lng }} options={{ icon: markerIcon }} />
      )}
    </GoogleMap>
  );
});

export default ParkMap;
