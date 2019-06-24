import React from "react";
import { shallow, mount } from "enzyme";
import ParkItem from "../ParkItem";
import FavButton from "../../FavButton/FavButton";

jest.mock("../../FavButton/FavButton", () => {
  return function() {
    return null;
  };
});

const defaultProps = {
  parkId: "BDBD573F-97EF-44E7-A579-471679F2C42A",
  parkThumbUrl: "https://firebasestorage.googleapis.com/",
  parkName: "Black Canyon Of The Gunnison",
  parkIsFavorite: true,
  handleParkSelect: () => {},
  handleFavorite: () => {}
};

describe("<ParkItem />", () => {
  describe("props", () => {
    it("renders with `parkId` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkId")).toStrictEqual(
        "BDBD573F-97EF-44E7-A579-471679F2C42A"
      );
    });

    it("renders with `parkThumbUrl` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkThumbUrl")).toStrictEqual(
        "https://firebasestorage.googleapis.com/"
      );
    });

    it("renders with `parkName` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkName")).toStrictEqual(
        "Black Canyon Of The Gunnison"
      );
    });

    it("renders with `parkIsFavorite` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkIsFavorite")).toStrictEqual(true);
    });
  });

  describe("`Explore` button", () => {
    it("`handleParkSelect` is called with `parkId` as an argument", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <ParkItem {...defaultProps} handleParkSelect={spy} />
      );
      wrapper.find(".park__explore").simulate("click");
      expect(spy).toHaveBeenCalledWith("BDBD573F-97EF-44E7-A579-471679F2C42A");
    });
  });

  describe("<FavButton />", () => {
    it("`parkId` gets passed as props", () => {
      const wrapper = shallow(<ParkItem {...defaultProps} />);
      expect(wrapper.find(FavButton).prop("parkId")).toStrictEqual(
        "BDBD573F-97EF-44E7-A579-471679F2C42A"
      );
    });

    it("`parkIsFavorite` gets passed as props", () => {
      const wrapper = shallow(<ParkItem {...defaultProps} />);
      expect(wrapper.find(FavButton).prop("parkIsFavorite")).toStrictEqual(
        true
      );
    });
  });
});
