import React from "react";
import { shallow, mount } from "enzyme";
import ParkWeather from "../ParkWeather";

const defaultProps = {
  lat: "38.57779869",
  lng: "-107.7242756"
};

describe("<ParkWeather />", () => {
  describe("props", () => {
    it("renders with `lat` as a prop", () => {
      const wrapper = mount(<ParkWeather {...defaultProps} />);
      expect(wrapper.prop("lat")).toStrictEqual("38.57779869");
    });

    it("renders with `lng` as a prop", () => {
      const wrapper = mount(<ParkWeather {...defaultProps} />);
      expect(wrapper.prop("lng")).toStrictEqual("-107.7242756");
    });
  });
});
