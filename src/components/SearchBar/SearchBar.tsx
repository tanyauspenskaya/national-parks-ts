import icon from "../../assets/icons.svg";
import React from "react";

interface Props {
  term: string;
  handleInputChange(e: React.FormEvent<HTMLInputElement>): void;
  handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const SearchBar: React.FC<Props> = props => {
  const { term, handleInputChange, handleFormSubmit } = props;

  return (
    <>
      <h2 className="search__title">PARK SEARCH</h2>
      <form className="search__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Type here park name or state"
          onChange={handleInputChange}
          value={term}
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
};

export default SearchBar;
