import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./containers/Offers";

import "./css/reset.css";
import "./css/App.css";

function App() {
  return (
    <div>
      <div>
        <h1>Titre de mon site</h1>
      </div>
      <Router>
        <Switch>
          <Route path="/offers">
            <Offers />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
