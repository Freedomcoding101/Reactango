import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { mediaURL } from "../config";

function Project({ project }) {
  return (
    <Card className="my-3 p-3 rounded project-card">
      <Link to={`/project/${project._id}`}>
        <Card.Img src={`${mediaURL}${project.image}`} />
      </Link>
      <Card.Body>
        <Link to={`/project/${project._id}`}>
          <Card.Title as="div">
            <strong>{project.title}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
