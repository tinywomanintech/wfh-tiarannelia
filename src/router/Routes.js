import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ComingSoon from '../components/ComingSoon';
import Definition from '../components/Definition';
import HomePage from '../pages/HomePage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="#started" exact>
          <Definition />
        </Route>
        <Route path="#hero" exact>
          <Definition />
        </Route>
        <Route path="/coming-soon" exact>
          <ComingSoon />
        </Route>
      </Switch>
    </Router>
  );
}
