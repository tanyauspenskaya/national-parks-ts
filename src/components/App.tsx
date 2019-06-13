import "../styles/main.scss";
import React, { Component } from "react";

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
  data: [];
  results: [];
  visited: [];
  selectedPark: {} | null;
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
          <ProgressBar />
        </Section>
        <Section sectionClass="search" sectionId="search">
          <SearchBar />
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
}

export default App;
