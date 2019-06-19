import "../styles/main.scss";
import React, { Component } from "react";
import { Park } from "../types";

import Header from "./Header/Header";
import Tagline from "./Tagline/Tagline";
import ProgressBar from "./ProgressBar/ProgressBar";
import Section from "./Section/Section";
import SearchBar from "./SearchBar/SearchBar";
import ResultsList from "./ResultsList/ResultsList";
import Detail from "./Detail/Detail";
import VisitedList from "./VisitedList/VisitedList";

import firebaseInit from "../firebase/firebase";

interface Props {}

interface State {
  appData: { [key: string]: Park };
  firebaseData: Park[];
  results: Park[];
  selectedPark: Park | null;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      appData: {},
      firebaseData: [],
      results: [],
      selectedPark: null
    };
  }

  componentDidMount() {
    firebaseInit().once("value", snap =>
      this.setState({ firebaseData: snap.val() }, this.mapData)
    );
  }

  render() {
    return (
      <>
        <Section sectionClass="intro" sectionId="intro">
          <Header />
          <Tagline />
          <ProgressBar appData={this.state.appData} />
        </Section>
        <Section sectionClass="search" sectionId="search">
          <SearchBar
            handleFormSubmit={this.handleFormSubmit}
            handleInputClear={this.handleInputClear}
          />
        </Section>
        <Section sectionClass="result" sectionId="result">
          <ResultsList
            results={this.state.results}
            handleParkSelect={this.handleParkSelect}
            handleFavorite={this.handleFavorite}
          />
        </Section>
        <Section sectionClass="detail" sectionId="detail">
          <Detail
            selectedPark={this.state.selectedPark}
            handleFavorite={this.handleFavorite}
          />
        </Section>
        <Section sectionClass="visited" sectionId="visited">
          <VisitedList
            appData={this.state.appData}
            handleParkSelect={this.handleParkSelect}
            handleFavorite={this.handleFavorite}
          />
        </Section>
      </>
    );
  }

  mapData() {
    const { firebaseData } = this.state;
    const mappedData: { [key: string]: Park } = {};
    firebaseData.forEach(park => {
      mappedData[park.id] = park;
    });

    this.setState({ appData: mappedData });
  }

  handleInputClear = () => {
    this.setState({ results: [] });
  };

  handleFormSubmit = (term: string) => {
    const searchTerm = term.toLowerCase();
    const searchResults = Object.values(this.state.appData).filter(item => {
      return (
        item.fullName.toLowerCase().includes(searchTerm) ||
        item.fullStates.toLowerCase().includes(searchTerm)
      );
    });
    this.setState({ results: searchResults });
  };

  handleParkSelect = (id: string) => {
    this.setState({ selectedPark: this.state.appData[id] });
  };

  handleFavorite = (id: string) => {
    const updatedMappedData = Object.assign({}, this.state.appData);
    updatedMappedData[id].isFavorite = !updatedMappedData[id].isFavorite;
    this.setState({ appData: updatedMappedData });
  };
}

export default App;
