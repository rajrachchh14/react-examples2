import React from 'react';
import Sidebar from './Sidebar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ExUseState from './ExUseState';
import ExUseStateTwo from './ExUseStateTwo';
import ExUseStateThree from './ExUseStateThree';
import ExUTimer from './ExUTimer';
import ExForm from './ExForm';
import Error from './Error';
import OuterFunction from './OuterFunction';
import According from './According';
import UseEffectEx from './UseEffectEx';
import AxiosEx from './AxiosEx';
import ExRender from './ExRender';
import ExUseParms from './ExUseParms';

export default function App() {
  function ChiledFunctonCall() {
    return (
      <>
        <div>
          <h1>ChiledFunctonCall</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          {/*component*/}
          <Route
            path="/ExRender"
            render={() => (
              <ExRender name="This is Example of render for passing props" />
            )}
          />

          <Route path="/ExUseState">
            <ExUseState />
          </Route>

          <Route path="/ExUseParms/:fname">
            <ExUseParms />
          </Route>

          <Route path="/ExUseStateTwo">
            <ExUseStateTwo />
          </Route>

          <Route path="/ExUseStateThree">
            <ExUseStateThree />
          </Route>

          <Route path="/ExUTimer">
            <ExUTimer />
          </Route>

          <Route path="/ExForm">
            <ExForm />
          </Route>

          <Route path="/OuterFunction" exact>
            <OuterFunction />
          </Route>

          <Route path="/OuterFunction/ChiledFunctonCall">
            <ChiledFunctonCall />
          </Route>

          <Route path="/According">
            <According />
          </Route>

          <Route path="/UseEffectEx">
            <UseEffectEx />
          </Route>

          <Route path="/AxiosEx">
            <AxiosEx />
          </Route>

          {/* Error Router Ne Last MA Rakhvanu */}
          <Route path="">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
