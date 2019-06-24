import React from "react";
import { shallow, mount } from "enzyme";
import Detail from "../Detail";
import ParkMap from "../../ParkMap/ParkMap";
import FavButton from "../../FavButton/FavButton";
import ParkWeather from "../../ParkWeather/ParkWeather";

jest.mock("../../ParkMap/ParkMap", () => {
  return function() {
    return null;
  };
});

jest.mock("../../FavButton/FavButton", () => {
  return function() {
    return null;
  };
});

jest.mock("../../ParkWeather/ParkWeather", () => {
  return function() {
    return null;
  };
});

const defaultProps = {
  selectedPark: {
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
  },
  handleFavorite: () => {}
};

describe("<Detail />", () => {
  it("renders with `selectedPark` as props", () => {
    const wrapper = mount(<Detail {...defaultProps} />);
    expect(wrapper.prop("selectedPark")).toMatchObject({
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
    });
  });

  it("does not render if `selectedPark` is null", () => {
    const wrapper = mount(<Detail {...defaultProps} selectedPark={null} />);
    expect(wrapper.children().length).toEqual(0);
  });

  describe("children", () => {
    describe("<FavButton />", () => {
      it("`parkId` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(FavButton).prop("parkId")).toEqual(
          "BDBD573F-97EF-44E7-A579-471679F2C42A"
        );
      });

      it("`parkIsFavorite` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(FavButton).prop("parkIsFavorite")).toEqual(true);
      });
    });

    describe("<ParkMap />", () => {
      it("`lat` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(ParkMap).prop("lat")).toEqual("38.57779869");
      });

      it("`lng` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(ParkMap).prop("lng")).toEqual("-107.7242756");
      });
    });

    describe("<ParkWeather />", () => {
      it("`lat` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(ParkWeather).prop("lat")).toEqual("38.57779869");
      });

      it("`lng` gets passed as props", () => {
        const wrapper = shallow(<Detail {...defaultProps} />);
        expect(wrapper.find(ParkWeather).prop("lng")).toEqual("-107.7242756");
      });
    });
  });
});
