import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../SearchBar";

const defaultProps = {
  handleFormSubmit: jest.fn(),
  handleInputClear: jest.fn()
};

describe("<SearchBar />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<SearchBar {...defaultProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  describe("input", () => {
    it("responds to change event and changes the state of the component", () => {
      const wrapper = shallow(<SearchBar {...defaultProps} />);
      wrapper.find("input").simulate("change", {
        currentTarget: { value: "canyon" }
      });
      expect(wrapper.state("term")).toEqual("canyon");
    });

    it("user text is echoed", () => {
      const wrapper = shallow(<SearchBar {...defaultProps} />);
      wrapper.find("input").simulate("change", {
        currentTarget: { value: "nevada" }
      });
      expect(wrapper.find("input").props().value).toEqual("nevada");
    });
  });

  describe("form", () => {
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
