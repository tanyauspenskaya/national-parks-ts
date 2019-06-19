import React from "react";
import { shallow, mount } from "enzyme";
import ParkItem from "../ParkItem";

const defaultProps = {
  parkId: "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
  parkThumbUrl:
    "https://firebasestorage.googleapis.com/v0/b/parks-react.appspot.com/o/ParkPhotos%2FYosemite.jpg?alt=media&token=61467592-6add-4395-ad69-324547c8a422",
  parkName: "Yosemite",
  parkIsFavorite: true,
  handleParkSelect: jest.fn(),
  handleFavorite: jest.fn()
};

describe("<ParkItem />", () => {
  describe("props", () => {
    it("renders with `parkId` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkId")).toBe(
        "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2"
      );
    });

    it("renders with `parkThumbUrl` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkThumbUrl")).toBe(
        "https://firebasestorage.googleapis.com/v0/b/parks-react.appspot.com/o/ParkPhotos%2FYosemite.jpg?alt=media&token=61467592-6add-4395-ad69-324547c8a422"
      );
    });

    it("renders with `parkName` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkName")).toBe("Yosemite");
    });

    it("renders with `parkIsFavorite` as a prop", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      expect(wrapper.prop("parkIsFavorite")).toBe(true);
    });
  });

  describe("details button", () => {
    it("handleParkSelect is invoked when the button is clicked", () => {
      const wrapper = mount(<ParkItem {...defaultProps} />);
      wrapper.find(".park__explore").simulate("click");
      expect(wrapper.prop("handleParkSelect")).toHaveBeenCalled();
    });
  });

  describe("<FavButton />", () => {
    it("renders as a child", () => {
      const wrapper = shallow(<ParkItem {...defaultProps} />);
      expect(wrapper.find("FavButton")).toHaveLength(1);
    });
  });
});
