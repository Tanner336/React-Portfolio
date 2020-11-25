import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Background from "./Background"
import "./Display.css"


function Display() {
  const profPic = "./assets/github-profile-pic.png"

  return (
    <Container Fluid>
      <Row>
        <div className="pic-container">
          <Col xs lg="2">
            <img src={profPic} alt="Profile Pic" style = {{padding: "2px", height: "215px", margintop: "10px" }}></img>
          <div className="display-text">
            This website is meant to display my web applications that are finished or I am currently working on to potential employers.
          </div>
          </Col>
        </div>
        <Background />
      </Row>
    </Container>
  );

};

export default Display;