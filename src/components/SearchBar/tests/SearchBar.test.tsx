import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../SearchBar";

const defaultProps = {
  handleFormSubmit: () => {},
  handleInputClear: () => {}
};

describe("<SearchBar />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SearchBar {...defaultProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  describe("input", () => {
    it("responds to change event and changes the state of the component which tells the input its value", () => {
      const wrapper = shallow(<SearchBar {...defaultProps} />);
      wrapper.find("input").simulate("change", {
        currentTarget: { value: "canyon" }
      });
      expect(wrapper.find("input").prop("value")).toEqual("canyon");
    });

    it("calls `handleInputClear` when the input value is empty", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <SearchBar {...defaultProps} handleInputClear={spy} />
      );
      wrapper.find("input").simulate("change", {
        currentTarget: { value: "" }
      });
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(spy).toHaveBeenCalled();
    });
  });

  describe("form", () => {
    it("calls `handleFormSubmit` when form is submitted", () => {
      const spy = jest.fn();
      const wrapper = shallow(
        <SearchBar {...defaultProps} handleFormSubmit={spy} />
      );
      wrapper.find("input").simulate("change", {
        currentTarget: { value: "canyon" }
      });
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(spy).toHaveBeenCalledWith("canyon");
    });

    it("when the form is submitted the even is cancelled", () => {
      const wrapper = shallow(<SearchBar {...defaultProps} />);
      let prevented = false;
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {
          prevented = true;
        }
      });
      expect(prevented).toBe(true);
    });
  });
});
