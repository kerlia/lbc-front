import React, { useState, useEffect } from "react";

import "./css/reset.css";
import "./css/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faSearch, faUser, faCartPlus);

function App() {
  const API = "https://leboncoin-api.herokuapp.com/api/offer/with-count";
  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
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
        <p>...Loading</p>
      ) : (
        <>
          <Router>
            <Header />
            <Switch>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/offer/:id">
                <Offer />
              </Route>
              <Route path="/">
                <Offers offers={offers} />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </>
      )}
    </>
  );
}

export default App;
