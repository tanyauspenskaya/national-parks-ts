import icon from "../../assets/icons.svg";
import React, { Component } from "react";

interface State {
  term: string;
}

interface Props {
  handleFormSubmit(term: string): void;
  handleInputClear(): void;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <>
        <h2 className="search__title">PARK SEARCH</h2>
        <form className="search__form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Type here park name or state"
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <button type="submit" className="search__submit">
            <svg
              className="search__magnifier"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <use xlinkHref={icon + "#magnifier"} />
            </svg>
          </button>
        </form>
      </>
    );
  }

  onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ term: e.currentTarget.value });
    if (!e.currentTarget.value.length) {
      this.props.handleInputClear();
    }
  };

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.term.trim().length) {
      this.props.handleFormSubmit(this.state.term);
    }
  };
}

export default SearchBar;
