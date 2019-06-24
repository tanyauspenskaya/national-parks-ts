import React from "react";
import { shallow, mount } from "enzyme";
import ResultsList from "../ResultsList";
import ParkItem from "../../ParkItem/ParkItem";

jest.mock("../../ParkItem/ParkItem", () => {
  return function() {
    return null;
  };
});

const defaultProps = {
  results: [
    {
      description: "Big enough to be overwhelming",
      designation: "National Park",
      directionsInfo:
        "7 miles north on CO Highway 347 from the intersection with U.S. Highway 50 east of Montrose",
      directionsUrl: "http://www.nps.gov/blca/planyourvisit/directions.htm",
      fullName: "Black Canyon Of The Gunnison National Park",
      fullStates: "Colorado",
      id: "BDBD573F-97EF-44E7-A579-471679F2C42A",
      isFavorite: true,
      lat: "38.57779869",
      long: "-107.7242756",
      name: "Black Canyon Of The Gunnison",
      parkCode: "blca",
      photoUrl: "https://firebasestorage.googleapis.com/",
      states: "CO",
      thumbUrl: "https://firebasestorage.googleapis.com/",
      url: "https://www.nps.gov/blca/index.htm",
      weatherInfo: "Today's Weather: can vary greatly throughout the day."
    }
  ],
  handleParkSelect: () => {},
  handleFavorite: () => {}
};

describe("<ResultsList />", () => {
  describe("props", () => {
    it("renders with `results` as a prop", () => {
      const wrapper = mount(<ResultsList {...defaultProps} />);
      expect(wrapper.prop("results").length).toEqual(1);
    });

    it("renders nothing when `results` is empty", () => {
      const wrapper = mount(<ResultsList {...defaultProps} results={[]} />);
      expect(wrapper.find(".park__list").children().length).toStrictEqual(0);
    });
  });

  describe("children", () => {
    describe("<ParkItem />", () => {
      it("`parkId` gets passed as a prop", () => {
        const wrapper = shallow(<ResultsList {...defaultProps} />);
        expect(wrapper.find(ParkItem).prop("parkId")).toStrictEqual(
          "BDBD573F-97EF-44E7-A579-471679F2C42A"
        );
      });

      it("`parkThumbUrl` gets passed as a prop", () => {
        const wrapper = shallow(<ResultsList {...defaultProps} />);
        expect(wrapper.find(ParkItem).prop("parkThumbUrl")).toStrictEqual(
          "https://firebasestorage.googleapis.com/"
        );
      });

      it("`parkName` gets passed as a prop", () => {
        const wrapper = shallow(<ResultsList {...defaultProps} />);
        expect(wrapper.find(ParkItem).prop("parkName")).toStrictEqual(
          "Black Canyon Of The Gunnison"
        );
      });

      it("`parkIsFavorite` gets passed as a prop", () => {
        const wrapper = shallow(<ResultsList {...defaultProps} />);
        expect(wrapper.find(ParkItem).prop("parkIsFavorite")).toStrictEqual(
          true
        );
      });
    });
  });
});
