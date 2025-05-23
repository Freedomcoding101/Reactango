import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../profile.css";
import { mediaURL } from "../config";

function Profile({ profile }) {
  return (
    <div className="my-3 p-3 rounded profile-card">
      {profile?.image && (
        <img
        src={profile.image}
        className="card-img"
        alt={profile.name || "Profile image"}
      />
)}
      <div> Owen Alexander Dillabough</div>
    </div>
  );
}

export default Profile;
