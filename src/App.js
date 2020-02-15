import React, { useState, useEffect } from "react";

import "./css/reset.css";
import "./css/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faPlusSquare,
  faSearch,
  faUser,
  faCartPlus,
  faClock,
  faEye,
  faBell,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircle,
  faPlusSquare,
  faSearch,
  faUser,
  faCartPlus,
  faClock,
  faEye,
  faBell,
  faTimesCircle
);

function App() {
  const API = "https://leboncoin-api.herokuapp.com/api/offer/with-count";
  const LIMIT = 5;

  const cookieToken = Cookies.get("lbc-cook");
  const userState = cookieToken ? { "lbc-cook": cookieToken } : null;
  const [user, setUser] = useState(userState);

  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [offers, setOffers] = useState([]);
  const [count, setCount] = useState(0);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    try {
      const apiUrl = API + "?skip=" + 0 + "&limit=" + LIMIT;
      const response = await axios.get(apiUrl);
      console.log(">>>>>>> api", apiUrl);
      setCount(response.data.count);
      setOffers(response.data.offers);
      setIsLoading(false);
    } catch (e) {
      console.error("Error fetching data from api");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading home</p>
      ) : (
        <>
          <Router>
            <Header user={user} setUser={setUser} setModal={setModal} />
            <Switch>
              <Route path="/sign-up">
                <SignUp user={user} setUser={setUser} />
              </Route>
              <Route path="/login">
                <main className="container">
                  <Login
                    user={user}
                    setUser={setUser}
                    modal={modal}
                    setModal={setModal}
                  />
                </main>
              </Route>
              <Route path="/offer/:id">
                <Offer />
              </Route>
              <Route path="/">
                <Offers offers={offers} />
              </Route>
            </Switch>
            {modal && (
              <div
                className="modal"
                onClick={e => {
                  if (e.target.className === "modal") {
                    setModal(false);
                  }
                }}
              >
                <Login
                  user={user}
                  setUser={setUser}
                  modal={modal}
                  setModal={setModal}
                />
              </div>
            )}
            <Footer />
          </Router>
        </>
      )}
    </>
  );
}

export default App;
