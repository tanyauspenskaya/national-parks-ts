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

  it("user text is echoed", () => {
    const wrapper = shallow(<SearchBar {...defaultProps} />);
    wrapper.find("input").simulate("change", {
      currentTarget: { value: "canyon" }
    });
    expect(wrapper.find("input").props().value).toEqual("canyon");
  });

  // simulate input change

  // simulate form submission

  // when the form is submitted the event is cancelled
});
