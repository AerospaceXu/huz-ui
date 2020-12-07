import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import ComponentButtonPage from './views/ComponentButtonPage';
import Nav from './Layouts/Nav';

const App: React.FC = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/components/buttons">
        <ComponentButtonPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
