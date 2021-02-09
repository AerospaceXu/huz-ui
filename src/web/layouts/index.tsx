import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/index.css";
import "../../lib/index.css";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Home from "../pages/Home";
import ComponentButtonPage from "../pages/ComponentButtonPage";
import ComponentInputPage from "../pages/ComponentInputPage";
import ComponentMessagePage from "../pages/ComponentMessagePage";

const Layout: React.FC = () => (
  <Router>
    <Nav />
    <Main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/buttons">
          <ComponentButtonPage />
        </Route>
        <Route path="/inputs">
          <ComponentInputPage />
        </Route>
        <Route path="/messages">
          <ComponentMessagePage />
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default Layout;
