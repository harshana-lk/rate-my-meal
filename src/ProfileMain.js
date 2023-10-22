import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function ProfileMain() {
  return (
    <div classname="main-container">
      <div classname="heading-text">
        <h1>Your Profile</h1>
      </div>
      <div classname="gray-background">
        <div classname="primary-container">
          <div classname="main-name">
            <h2>John Doe</h2>
          </div>
          <div classname="first-name">
            <h5>First Name : </h5>
            <p classname="form-data">john</p>
          </div>
          <div classname="second-name">
            <h5>Second Name : </h5>
            <p classname="form-data">Doe</p>
          </div>
          <div classname="email">
            <h5>Email : </h5>
            <p classname="form-data">johndoe@gmail.com</p>
          </div>
          <div classname="contact-no">
            <h5>Contact Number : </h5>
            <p classname="form-data">+94 7789456641</p>
          </div>
          <div classname="btn-container">
            <link to="/ProfileInfo" />
            <button classname="save-button">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
