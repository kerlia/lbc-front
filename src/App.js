import React, { useState } from "react";

import "./css/reset.css";
import "./css/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cookies from "js-cookie";

import Login from "./containers/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";

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
  const cookieToken = Cookies.get("lbc-cook");
  const userState = cookieToken ? { "lbc-cook": cookieToken } : null;
  const [user, setUser] = useState(userState);

  const [modal, setModal] = useState(false);

  return (
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
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/:p?">
            <Offers />
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
  );
}

export default App;
