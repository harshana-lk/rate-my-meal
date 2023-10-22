import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const ProfileMain = () => {
  return (
    <div className="main-container">
      <div className="heading-text">
        <h1>Your Profile</h1>
      </div>
      <div className="gray-background">
        <div className="primary-container">
          <div className="main-name">
            <h2>John Doe</h2>
          </div>
          <div className="first-name">
            <h5>First Name : </h5>
            <p className="form-data">john</p>
          </div>
          <div className="second-name">
            <h5>Second Name : </h5>
            <p className="form-data">Doe</p>
          </div>
          <div className="email">
            <h5>Email : </h5>
            <p className="form-data">johndoe@gmail.com</p>
          </div>
          <div className="contact-no">
            <h5>Contact Number : </h5>
            <p className="form-data">+94 7789456641</p>
          </div>
          <div className="btn-container">
            <Link to="/ProfileInfo">
              <button className="save-button">Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMain;
