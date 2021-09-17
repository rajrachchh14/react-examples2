import React from 'react';
import Sidebar from './Sidebar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ExUseState from './ExUseState';
import ExUTimer from './ExUTimer';
import ExForm from './ExForm';
import Error from './Error';

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/Home" exact>
            <Home />
          </Route>

          <Route path="/ExUseState">
            <ExUseState />
          </Route>

          <Route path="/ExUTimer">
            <ExUTimer />
          </Route>

          <Route path="/ExForm">
            <ExForm />
          </Route>

          <Route path="">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
