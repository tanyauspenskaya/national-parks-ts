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
  term: string;
  results: Park[];
  visited: Park[];
  selectedPark: {} | null;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      term: "",
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
          <ProgressBar />
        </Section>
        <Section sectionClass="search" sectionId="search">
          <SearchBar
            term={this.state.term}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Section>
        <Section sectionClass="result" sectionId="result">
          <ResultsList />
        </Section>
        <Section sectionClass="detail" sectionId="detail">
          <Detail />
        </Section>
        <Section sectionClass="visited" sectionId="visited">
          <VisitedList />
        </Section>
      </>
    );
  }

  handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ term: e.currentTarget.value });
    if (!e.currentTarget.value.length) {
      this.handleInputClear();
    }
  };

  handleInputClear = () => {
    this.setState({ results: [] });
  };

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.term.trim().length) {
      return;
    }

    const searchTerm = this.state.term.toLowerCase();
    const data = this.state.data;

    const searchResults = data.filter(item => {
      return (
        item.fullName.toLowerCase().includes(searchTerm) ||
        item.fullStates.toLowerCase().includes(searchTerm)
      );
    });

    this.setState({ results: searchResults });
  };
}

export default App;
