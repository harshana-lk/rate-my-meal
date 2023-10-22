import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileMain from "./ProfileMain";
import ProfileInfo from "./ProfileInfo";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={ProfileMain} />
        <Route path="/ProfileInfo" component={ProfileInfo} />
      </Routes>
    </Router>
  );
};

export default Routing;
