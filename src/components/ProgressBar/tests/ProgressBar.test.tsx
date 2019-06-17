import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import ProgressBar from "../ProgressBar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  visitedParksNumber: 0,
  totalParksNumber: 145
};

describe("<ProgressBar />", () => {
  it("renders with given `visited parks` number", () => {
    const wrapper = mount(<ProgressBar {...defaultProps} />);
    const progressBar = wrapper.find(ProgressBar);
    expect(progressBar.prop("visitedParksNumber")).toStrictEqual(0);
  });

  it("renders with given `total parks` number", () => {
    const wrapper = mount(<ProgressBar {...defaultProps} />);
    const progressBar = wrapper.find(ProgressBar);
    expect(progressBar.prop("totalParksNumber")).toStrictEqual(145);
  });
});
