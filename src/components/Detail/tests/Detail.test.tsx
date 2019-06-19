import React from "react";
import { shallow, mount } from "enzyme";
import Detail from "../Detail";

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
  handleFavorite: jest.fn()
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
    it("<FavButton /> renders as a child", () => {
      const wrapper = shallow(<Detail {...defaultProps} />);
      expect(wrapper.find("FavButton")).toHaveLength(1);
    });

    // it("<ParkMap /> renders as a child", () => {
    //   const wrapper = shallow(<Detail {...defaultProps} />);
    //   // console.log(wrapper.find(".detail__map").debug());
    //   expect(wrapper.contains(<ParkMap />)).toBe(true);
    // });

    it("<ParkWeather /> renders as a child", () => {
      const wrapper = shallow(<Detail {...defaultProps} />);
      expect(wrapper.find("ParkWeather")).toHaveLength(1);
    });
  });
});
