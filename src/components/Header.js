import React from "react";
import { NavLink, Link } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "../img/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ user, setUser, setModal }) {
  // const switchModal = () => {
  //   console.log("openModal");
  //   document.querySelector(".modal").classList.toggle("hidden");
  // };

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
            <button
              onClick={e => {
                // const modal = true;
                setModal(true);
              }}
            >
              modal
            </button>
            {user ? (
              <Link
                className="semi-bold"
                onClick={e => {
                  e.preventDefault();
                  setUser(null);
                  Cookies.remove("lbc-cook");
                }}
              >
                Se déconnecter
              </Link>
            ) : (
              <NavLink to="/login" activeClassName="selected">
                <FontAwesomeIcon className="icon" icon="user" />
                Se connecter
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
