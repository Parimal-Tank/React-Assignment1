import React from "react";

import OurProjectImg from "../../assets/images/OurProject.svg";

import OurProjectImg2 from "../../assets/images/OurProject2.svg";
import OurProjectImg3 from "../../assets/images/OurProject3.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = () => {
  return (
    <div className="container">

      <div className="service-title-text my-5">
      <div>
        <p className="service-text mb-0">OUR PROJECTS</p>
        <div className="client-border">
          <div className="project-text-line"></div>
        </div>
      </div>
    </div>

      <Row>
        <Col xs={6}>
          <div className="d-flex justify-content-end ">
            <div className="projectImg-animation">
              <img
                className="img-fluid image"
                src={OurProjectImg}
                alt="Projects"
              />
              <div className="overlay">
                <div className="project-text">Project Name</div>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={6}>
          <Col xs={12}>
            <img src={OurProjectImg2} alt="Projects" className="img-fluid mb-3"></img>
          </Col>

          <Col xs={12}>
            <img src={OurProjectImg3} alt="Projects" className="img-fluid"></img>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
