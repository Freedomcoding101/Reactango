// rfce is the shortcut to create this homescreen!

import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Project from "../components/Project";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../config";

function ProjectsScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await axios.get(`${baseURL}/projects/`);
      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-start px-3 mb-4">
        <motion.div whileHover={{ scale: 1.05, x: -5 }}>
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        </motion.div>
      </div>
      <div>
        <Container className="d-flex justify-content-center">
          <div style={{ width: "80vw" }} className="mb-5">
            <Row className="g-4">
              {projects.map((project) => (
                <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                  <Project project={project} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectsScreen;
