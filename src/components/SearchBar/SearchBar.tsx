import icon from "../../assets/icons.svg";
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <>
        <h2 className="search__title">PARK SEARCH</h2>
        <form className="search__form">
          <input
            type="text"
            className="search__input"
            placeholder="Type here park name or state"
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
}

export default SearchBar;
