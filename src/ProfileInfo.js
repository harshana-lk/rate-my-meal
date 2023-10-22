import React from "react";
import "./Style.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className="gray-background">
        <div className="profile-edit-text">Edit Your Profile</div>
        <div className="profile-content">Profile</div>
        <div className="profile-info">
          <p>
            This information will be displayed publicly so be carefull what you
            share
          </p>
        </div>

        <div className="user-name">
          <p>Username: </p>
        </div>
        <div className="user-text">
          <input
            type="text"
            placeholder="John Doe"
            className="user-name-input"
          />
        </div>

        <div className="user-photo">
          <p>Photo: </p>
        </div>
        <div className="upload">
          <button className="upload-button">Upload</button>
        </div>
        <div className="div-tag"></div>
        <div className="profile-content">Personal information</div>
        <div className="profile-info">
          <p>Use a permanant address where you can receive mail</p>
        </div>

        <div className="personal-name">
          <div>
            <div className="user-name">
              <p>First Name: </p>
            </div>
            <div className="personal-text">
              <input
                type="text"
                placeholder="John"
                className="user-name-input"
              />
            </div>
          </div>
          <div>
            <div className="user-name">
              <p>Last Name: </p>
            </div>
            <div className="personal-text">
              <input
                type="text"
                placeholder="Doe"
                className="user-name-input"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="user-name">
            <p>Email address: </p>
          </div>
          <div className="email-text">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="user-name-input"
            />
          </div>
        </div>

        <div>
          <div className="user-name">
            <p>Contact Us: </p>
          </div>
          <div className="personal-text">
            <input
              type="text"
              placeholder="0778564977"
              className="user-name-input"
            />
          </div>
        </div>
        <div className="div-tag"></div>
        <div className="btn-container">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save Data</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
