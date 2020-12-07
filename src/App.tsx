import React from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Home from './views/Home';
import ComponentButtonPage from './views/ComponentButtonPage';

const Nav = styled.nav`
  width: 100%;

  > ul > li {
    margin: 4px 12px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.72);

    &:hover {
      color: rgba(0, 0, 0, 0.87);
    }
  }
`;

const App: React.FC = () => (
  <Router>
    <Nav className="center">
      <ul className="center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/components/buttons">按钮</Link>
        </li>
      </ul>
    </Nav>
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
