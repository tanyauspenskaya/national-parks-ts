import React from "react";
import { shallow, mount } from "enzyme";
import FavButton from "../FavButton";

const defaultProps = {
  parkId: "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
  parkIsFavorite: true,
  handleFavorite: jest.fn()
};

describe("<FavButton />", () => {
  describe("props", () => {
    it("renders with `parkId` as prop", () => {
      const wrapper = mount(<FavButton {...defaultProps} />);
      expect(wrapper.prop("parkId")).toStrictEqual(
        "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2"
      );
    });

    it("renders with `parkIsFavorite` as prop", () => {
      const wrapper = mount(<FavButton {...defaultProps} />);
      expect(wrapper.prop("parkIsFavorite")).toStrictEqual(true);
    });
  });

  describe("button", () => {
    it("`handleFavorite` is invoked when button is clicked", () => {
      const wrapper = mount(<FavButton {...defaultProps} />);
      wrapper.find("button").simulate("click");
      expect(wrapper.prop("handleFavorite")).toHaveBeenCalled();
    });

    it("`handleFavorite` is called with `parkId` as an argument", () => {
      const wrapper = mount(<FavButton {...defaultProps} />);
      wrapper.find("button").simulate("click");
      expect(wrapper.prop("handleFavorite")).toHaveBeenCalledWith(
        "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2"
      );
    });

    it("has class of `park__btn--green` when `parkIsFavorite` is true", () => {
      const wrapper = mount(
        <FavButton {...defaultProps} parkIsFavorite={true} />
      );
      expect(wrapper.find("button").hasClass("park__btn--green")).toEqual(true);
    });

    it("has class of `park__btn--grey` when `parkIsFavorite` is false", () => {
      const wrapper = mount(
        <FavButton {...defaultProps} parkIsFavorite={false} />
      );
      expect(wrapper.find("button").hasClass("park__btn--grey")).toEqual(true);
    });
  });
});
