import React from "react";
import { shallow, mount } from "enzyme";
import ParkWeather from "../ParkWeather";

const defaultProps = {
  lat: 33,
  lng: 33
};

describe("<ParkWeather />", () => {
  it("renders with `lat` as a prop", () => {
    const wrapper = mount(<ParkWeather {...defaultProps} />);
  });
});
