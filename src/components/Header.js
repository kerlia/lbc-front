import React from "react";

import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <div className="menu-left">
            <a href="/" className="logo">
              <img src={logo} alt="" />
            </a>
            <button className="btn btn-deposit">
              <FontAwesomeIcon className="icon" icon="plus-square" />
              Déposer une annonce
            </button>
            <a href="/" className="menu-search selected">
              <FontAwesomeIcon className="icon" icon="search" />
              Rechercher
            </a>
          </div>
          <div className="menu-right">
            <a href="#">
              <FontAwesomeIcon className="icon" icon="user" />
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
