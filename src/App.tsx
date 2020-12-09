import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Layouts/Nav';
import Main from './Layouts/Main';
import Home from './views/Home';
import ComponentButtonPage from './views/ComponentButtonPage';
import ComponentInputPage from './views/ComponentInputPage';

const App: React.FC = () => (
  <Router>
    <Nav />
    <Main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/components/buttons">
          <ComponentButtonPage />
        </Route>
        <Route path="/components/inputs">
          <ComponentInputPage />
        </Route>
      </Switch>
    </Main>
  </Router>
);

export default App;
