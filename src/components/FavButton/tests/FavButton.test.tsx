import React from "react";
import { shallow, mount } from "enzyme";
import FavButton from "../FavButton";

const defaultProps = {
  parkId: "4324B2B4-D1A3-497F-8E6B-27171FAE4DB2",
  parkIsFavorite: true,
  handleFavorite: () => {}
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
    it("when clicked, `handleFavorite` is called with `parkId` as an argument", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <FavButton {...defaultProps} handleFavorite={spy} />
      );
      wrapper.find("button").simulate("click");
      expect(spy).toHaveBeenCalledWith("4324B2B4-D1A3-497F-8E6B-27171FAE4DB2");
    });

    it("has class of `park__btn--green` when `parkIsFavorite` is true", () => {
      const wrapper = shallow(
        <FavButton {...defaultProps} parkIsFavorite={true} />
      );
      expect(wrapper.find("button").hasClass("park__btn--green")).toEqual(true);
    });

    it("has class of `park__btn--grey` when `parkIsFavorite` is false", () => {
      const wrapper = shallow(
        <FavButton {...defaultProps} parkIsFavorite={false} />
      );
      expect(wrapper.find("button").hasClass("park__btn--grey")).toEqual(true);
    });
  });
});
