import React from "react";

import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <div className="menu-left">
            <span className="logo">
              <img src={logo} alt="" />
            </span>
            <button className="btn-deposit">
              <FontAwesomeIcon className="icon" icon="plus-square" />
              Déposer une annonce
            </button>
            <a href="/" className="menu-search">
              <FontAwesomeIcon className="icon" icon="search" />
              Rechercher
            </a>
          </div>
          <div className="menu-right">
            <span>
              <FontAwesomeIcon className="icon" icon="user" />
              Se connecter
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
