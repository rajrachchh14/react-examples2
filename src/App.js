import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ExUseState from './ExUseState';
import ExUTimer from './ExUTimer';

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />

        <Route path="/Home" exact>
          <Home />
        </Route>

        <Route path="/ExUseState">
          <ExUseState />
        </Route>

        <Route path="/ExUTimer">
          <ExUTimer />
        </Route>
      </Router>
    </>
  );
}
