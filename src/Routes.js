import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileMain from "./ProfileMain";
import ProfileInfo from "./ProfileInfo";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProfileMain} />
        <Route path="/ProfileInfo" component={ProfileInfo} />
      </Switch>
    </Router>
  );
};

export default Routes;
