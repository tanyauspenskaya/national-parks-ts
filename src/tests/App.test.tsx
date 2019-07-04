import React from "react";
import { mount } from "enzyme";
import AppRedux, { App as AppComponent } from "../App";
import { Provider } from "react-redux";

jest.mock("../firebase/firebase", () => {
  const data = [
    {
      description:
        "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats with high biodiversity, clean air and water, and a rich cultural heritage. ",
      designation: "National Park",
      directionsInfo:
        "From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. ",
      directionsUrl: "http://www.nps.gov/acad/planyourvisit/directions.htm",
      fullName: "Acadia National Park",
      fullStates: "Maine",
      id: "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
      isFavorite: false,
      lat: "44.35",
      long: "-68.216667",
      name: "Acadia",
      parkCode: "acad",
      photoUrl: "https://firebasestorage.googleapis.com/",
      states: "ME",
      thumbUrl: "https://firebasestorage.googleapis.com/",
      weatherInfo:
        "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. "
    }
  ];

  return {
    __esModule: true,
    default: () => ({
      once: (arg: string, callback: (arg: any) => void) => {
        callback({
          val: () => {
            return data;
          }
        });
      }
    })
  };
});

jest.mock("../actions", () => {
  return {
    setData: () => {
      return null;
    }
  };
});

describe("<App />", () => {
  it("<App /> gets rendered", () => {
    const store = {
      dispatch: jest.fn(),
      getState: () => {
        return {
          parks: {}
        };
      },
      replaceReducer: jest.fn(),
      subscribe: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <AppRedux />
      </Provider>
    );
    expect(wrapper.find("Header").length).toBe(1);
  });

  describe("firebase", () => {
    it("Actions parks setData is called with mappedData", () => {
      const setData = jest.fn();
      const actions = {
        parks: {
          setData,
          updateData: jest.fn()
        }
      };
      const store = { parks: {} };

      mount(<AppComponent actions={actions} store={store} />);

      const mappedData = {
        "6DA17C86-088E-4B4D-B862-7C1BD5CF236B": {
          description:
            "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats with high biodiversity, clean air and water, and a rich cultural heritage. ",
          designation: "National Park",
          directionsInfo:
            "From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. ",
          directionsUrl: "http://www.nps.gov/acad/planyourvisit/directions.htm",
          fullName: "Acadia National Park",
          fullStates: "Maine",
          id: "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",
          isFavorite: false,
          lat: "44.35",
          long: "-68.216667",
          name: "Acadia",
          parkCode: "acad",
          photoUrl: "https://firebasestorage.googleapis.com/",
          states: "ME",
          thumbUrl: "https://firebasestorage.googleapis.com/",
          weatherInfo:
            "Located on Mount Desert Island in Maine, Acadia experiences all four seasons. "
        }
      };

      expect(setData).toHaveBeenCalledWith(mappedData);
    });
  });
});
