import icon from "../../assets/icons.svg";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="intro__header header">
      <a className="header__logo" href="/">
        <svg
          className="header__tree"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.5 50"
        >
          <use xlinkHref={icon + "#tree"} />
        </svg>
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#search">
              SEARCH
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#visited">
              VISITED
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
