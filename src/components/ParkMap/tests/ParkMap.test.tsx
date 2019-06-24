import React from "react";
import { mount } from "enzyme";
import ParkMap from "../../ParkMap/ParkMap";

const defaultProps = {
  lat: "38.57779869",
  lng: "-107.7242756",
  isMarkerShown: true
};

describe("<ParkMap />", () => {
  describe("props", () => {
    it("renders with `lat` as a prop", () => {
      const wrapper = mount(<ParkMap {...defaultProps} />);
      expect(wrapper.prop("lat")).toStrictEqual("38.57779869");
    });

    it("renders with `lng` as a prop", () => {
      const wrapper = mount(<ParkMap {...defaultProps} />);
      expect(wrapper.prop("lng")).toStrictEqual("-107.7242756");
    });

    it("renders with `isMarkerShown` as a prop", () => {
      const wrapper = mount(<ParkMap {...defaultProps} />);
      expect(wrapper.prop("isMarkerShown")).toStrictEqual(true);
    });
  });
});
