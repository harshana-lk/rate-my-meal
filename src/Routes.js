import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileMain from "./ProfileMain";
import ProfileInfo from "./ProfileInfo";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="./ProfileMain.js" component={ProfileMain} />
        <Route path="./ProfileInfo.js" component={ProfileInfo} />
      </Routes>
    </Router>
  );
};

export default Routes;
