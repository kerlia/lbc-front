import React, { useState, useEffect } from "react";

import "./css/reset.css";
import "./css/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey);

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

  // console.log("Count", count);
  // console.log("Offers", offers);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <div>
          <div>
            <h1>Le Bon Coin</h1>
          </div>
          <Router>
            <Switch>
              <Route path="/offer">
                <Offer />
              </Route>
              <Route path="/">
                <Offers />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
