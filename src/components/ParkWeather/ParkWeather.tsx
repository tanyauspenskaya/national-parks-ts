import React, { Component } from "react";
import { KEY, BASE_URL } from "./weatherKey";

interface Props {
  lat: string;
  lng: string;
}

interface State {
  weather: number | null;
}

class ParkWeather extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      weather: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  fetchData = () => {
    const { lat, lng } = this.props;
    fetch(`${BASE_URL}lat=${parseInt(lat)}&lon=${parseInt(lng)}&apiKey=${KEY}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ weather: fahrenheitToCelsius(data.main.temp) })
      );
  };

  render() {
    return <span className="detail__info-val">{this.state.weather}&deg;</span>;
  }
}

export default ParkWeather;

function fahrenheitToCelsius(fahrenheit: number) {
  return Math.round(fahrenheit - 273.15);
}
