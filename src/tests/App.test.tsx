import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import SearchBar from "../components/SearchBar/SearchBar";
import ResultsList from "../components/ResultsList/ResultsList";
import Detail from "../components/Detail/Detail";
import VisitedList from "../components/VisitedList/VisitedList";

jest.mock("../components/SearchBar/SearchBar", () => {
  return function() {
    return null;
  };
});

jest.mock("../components/Detail/Detail", () => {
  return function() {
    return null;
  };
});

jest.mock("../components/ResultsList/ResultsList", () => {
  return function() {
    return null;
  };
});

jest.mock("../components/VisitedList/VisitedList", () => {
  return function() {
    return null;
  };
});

describe("<App />", () => {
  describe("firebase", () => {});

  describe("<SearchBar />", () => {
    it("handleFormSubmit", () => {
      const wrapper = shallow(<App />);
      const component = wrapper.find(SearchBar);
    });

    it("handleInputClear", () => {});
  });

  describe("<ResultsList />", () => {
    it("results", () => {});

    it("handleParkSelect", () => {});

    it("handleFavorite", () => {});
  });

  describe("<Detail />", () => {
    it("selectedPark", () => {});

    it("handleFavorite", () => {});
  });

  describe("<VisitedList />", () => {
    it("appData", () => {});

    it("handleParkSelect", () => {});

    it("handleFavorite", () => {});
  });
});
