import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/home";



function AppRoute() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </div>
  );
}

export default AppRoute;
