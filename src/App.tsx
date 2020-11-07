import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
