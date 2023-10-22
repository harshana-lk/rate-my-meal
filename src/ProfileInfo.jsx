import React from "react";
import "./Style.css";

const ProfileInfo = () => {
  return (
    <div>
      <div classname="gray-background">
        <div classname="profile-edit-text">Edit Your Profile</div>
        <div classname="profile-content">Profile</div>
        <div classname="profile-info">
          <p>
            This information will be displayed publicly so be carefull what you
            share
          </p>
        </div>
        <div classname="user-name">
          <p>Username: </p>
        </div>
        <div classname="user-text">
          <input
            type="text"
            placeholder="John Doe"
            classname="user-name-input"
          />
        </div>
        <div classname="user-photo">
          <p>Photo: </p>
        </div>
        <div classname="upload">
          <button classname="upload-button">Upload</button>
        </div>
        <div classname="div-tag" />
        <div classname="profile-content">Personal information</div>
        <div classname="profile-info">
          <p>Use a permanant address where you can receive mail</p>
        </div>
        <div classname="personal-name">
          <div>
            <div classname="user-name">
              <p>First Name: </p>
            </div>
            <div classname="personal-text">
              <input
                type="text"
                placeholder="John"
                classname="user-name-input"
              />
            </div>
          </div>
          <div>
            <div classname="user-name">
              <p>Last Name: </p>
            </div>
            <div classname="personal-text">
              <input
                type="text"
                placeholder="Doe"
                classname="user-name-input"
              />
            </div>
          </div>
        </div>
        <div>
          <div classname="user-name">
            <p>Email address: </p>
          </div>
          <div classname="email-text">
            <input
              type="text"
              placeholder="example@gmail.com"
              classname="user-name-input"
            />
          </div>
        </div>
        <div>
          <div classname="user-name">
            <p>Contact Us: </p>
          </div>
          <div classname="personal-text">
            <input
              type="text"
              placeholder={"0778564977"}
              classname="user-name-input"
            />
          </div>
        </div>
        <div classname="div-tag" />
        <div classname="btn-container">
          <button classname="cancel-button">Cancel</button>
          <button classname="save-button">Save Data</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
