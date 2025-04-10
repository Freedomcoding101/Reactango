import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../profile.css";
import { baseURL } from "../config";

function Profile({ profile }) {
  return (
    <div className="my-3 p-3 rounded profile-card">
      <img
        src={`${baseURL}${profile.image}`}
        className="card-img"
        alt={profile.name}
      />
      <div> Socials </div>
    </div>
  );
}

export default Profile;
