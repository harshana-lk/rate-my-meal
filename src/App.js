import React from "react";
import "./App.css";
import "./Style.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="left">
        <button className="back-button"> &#9665; </button>
      </div>
      <div className="center">
        <div className="logo">
          <img src="rate-my-meal-logo.png" alt="Rate My Meal" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button className="search-icon">&#128269;</button>
        </div>
      </div>
      <div className="right">
        <button className="hamburger-button">&#9776;</button>
      </div>
    </div>
  );
}
export default App;
