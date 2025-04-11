import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../profile.css";
import { baseURL } from "../config";
import { mediaURL } from "../config";

function Profile({ profile }) {
  return (
    <div className="my-3 p-3 rounded profile-card">
      {profile?.image && (
        <img
        src={`${mediaURL}${profile.image}`}
        className="card-img"
        alt={profile.name || "Profile image"}
      />
)}
      <div> Socials </div>
    </div>
  );
}

export default Profile;
