import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              exact={true}
              activeClassName="selected"
              className="menu-search"
            >
              <FontAwesomeIcon className="icon" icon="search" />
              Rechercher
            </NavLink>
          </div>
          <div className="menu-right">
            <NavLink to="/login" activeClassName="selected">
              <FontAwesomeIcon className="icon" icon="user" />
              Se connecter
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
