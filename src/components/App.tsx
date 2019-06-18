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
  data: Park[];
  results: Park[];
  visited: Park[];
  selectedPark: Park | null;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      results: [],
      visited: [],
      selectedPark: null
    };
  }

  componentDidMount() {
    firebaseInit().once("value", snap => this.setState({ data: snap.val() }));
  }

  render() {
    return (
      <>
        <Section sectionClass="intro" sectionId="intro">
          <Header />
          <Tagline />
          <ProgressBar
            visitedParksNumber={this.state.visited.length}
            totalParksNumber={this.state.data.length}
          />
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
            visited={this.state.visited}
            handleParkSelect={this.handleParkSelect}
            handleFavorite={this.handleFavorite}
          />
        </Section>
      </>
    );
  }

  handleInputClear = () => {
    this.setState({ results: [] });
  };

  handleFormSubmit = (term: string) => {
    const searchTerm = term.toLowerCase();
    const data = this.state.data;
    const searchResults = data.filter(item => {
      return (
        item.fullName.toLowerCase().includes(searchTerm) ||
        item.fullStates.toLowerCase().includes(searchTerm)
      );
    });
    this.setState({ results: searchResults });
  };

  handleParkSelect = (park: Park) => {
    this.setState({ selectedPark: park });
  };

  handleFavorite = (park: Park) => {
    park.isFavorite = !park.isFavorite;
    this.updateDataState(park);
    this.updateResultsState(park);
    this.updateVisitedState(park);
    if (this.state.selectedPark) this.updateStateSelected(park);
  };

  updateDataState = (favPark: Park) => {
    const newDataState = this.state.data.map(item => {
      if (item.id === favPark.id) item.isFavorite = favPark.isFavorite;
      return item;
    });
    this.setState({ data: newDataState });
  };

  updateResultsState = (favPark: Park) => {
    const newResultsState = this.state.results.map(item => {
      if (item.id === favPark.id) item.isFavorite = favPark.isFavorite;
      return item;
    });
    this.setState({ results: newResultsState });
  };

  updateVisitedState = (favPark: Park) => {
    let newVisitedState = [];
    if (favPark.isFavorite) {
      newVisitedState = [...this.state.visited, favPark];
      this.setState({ visited: newVisitedState });
    } else {
      newVisitedState = this.state.visited.filter(
        item => item.id !== favPark.id
      );
      this.setState({ visited: newVisitedState });
    }
  };

  updateStateSelected = (favPark: Park) => {
    if (this.state.selectedPark && this.state.selectedPark.id === favPark.id) {
      this.setState({ selectedPark: favPark });
    }
  };
}

export default App;
