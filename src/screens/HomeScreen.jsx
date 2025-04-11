// rfce is the shortcut to create this homescreen!

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../config";
import Profile from "../components/Profile";

function HomeScreen() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseURL}/profile`);
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching the profile data: ", error);
      }
    };

    fetchProfile();
  }, []);

  console.log("Image path:", profile?.image);

  return (
    <Row>
      <Col xs={12} md={5}>
        {profile ? <Profile profile={profile} /> : <p>Loading....</p>}
      </Col>
      <Col xs={12} md={6} className="mb-5">
        <h2 className="bioheader">Bio</h2>
        <p className="bio">
          {profile?.bio ? profile.bio : "Bio not available"}
        </p>
        <h2 className="bioheader">Education</h2>
        <p className="bio">
          I took the course and obtained a Treehouse Techdegree in Python/Django Development
          (2023-2024), completing an intensive program that deepened my
          expertise in backend and full-stack development. During this time, I
          built multiple projects, including a full-stack app with a dynamic,
          real-time interface, gaining valuable experience with databases like
          PostgreSQL, Implementing Stripe, Utilizing Sentry, Recaptcha, Axes and many other tools along the way!
          My focus was on creating functional, user-friendly, and
          scalable applications.
        </p>
        <p className="bio">
          Prior to that, I was working on a Front-End Web Development Techdegree
          (2022-2023), where I gained hands-on experience with JavaScript,
          responsive design, and modern layout techniques. This foundation has
          given me a strong understanding of how front-end and back-end
          technologies work together, enhancing my ability to develop complete,
          well-integrated applications.
        </p>
        <h2 className="bioheader">Current Learning</h2>
        <p className="bio">
          Currently, I am expanding my skills by learning React. This is an
          exciting new challenge that allows me to better understand the
          interaction between front-end components and back-end systems. React
          is an essential tool for modern web development, and I’m eager to
          continue building my skills and use React to create dynamic,
          interactive user interfaces.
        </p>
        <h2 className="bioheader">Previous Work</h2>
        <p className="bio">
          Prior to beginning my coding journey I have done a number of different jobs.
          I worked in pipeline construction as a labourer, equipment operator, and a foreman, 
          overseeing the construction, testing, and commissioning of lines as well as the installation
          of water and domestic gas lines. Between jobs I also ran a home construction company with a
          partner doing mostly interior rennovations and landscaping. With fifteen years in the construction
          industry my mind is now looking for a new way to grow for something new to learn!
          (And my body will be thanking me too!) 
        </p>
        <h2 className="bioheader">Goals</h2>
        <p className="bio">
          As I continue my development journey, my goal is to apply my skills to
          projects that innovate, solve problems, and create seamless user
          experiences. I’m passionate about continuous learning and excited for
          what’s next. I look forward to collaborating with others and contributing to
          projects that make a difference. I am eager to take on new challenges and ready to join your team!
        </p>
      </Col>
    </Row>
  );
}

export default HomeScreen;
