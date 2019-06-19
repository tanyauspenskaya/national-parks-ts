import React from "react";
import { mount } from "enzyme";
import Section from "../Section";

const defaultProps = {
  children: "<p>children</p>",
  sectionClass: "someClass",
  sectionId: "someId"
};

describe("<Section />", () => {
  describe("props", () => {
    it("renders with `sectionClass` as prop", () => {
      const wrapper = mount(<Section {...defaultProps} />);
      expect(wrapper.prop("sectionClass")).toStrictEqual("someClass");
    });

    it("renders with `sectionId` as prop", () => {
      const wrapper = mount(<Section {...defaultProps} />);
      expect(wrapper.prop("sectionId")).toStrictEqual("someId");
    });

    it("has a class prefix of `sectionClass` prop", () => {
      const wrapper = mount(<Section {...defaultProps} />);
      expect(wrapper.find("section").hasClass("someClass__section")).toEqual(
        true
      );
    });

    it("has an id of `someId` prop", () => {
      const wrapper = mount(<Section {...defaultProps} />);
      expect(wrapper.find("#someId").exists()).toEqual(true);
    });

    it("has children if passed in as props", () => {
      const wrapper = mount(<Section {...defaultProps} />);
      expect(wrapper.prop("children")).toStrictEqual("<p>children</p>");
    });
  });
});
