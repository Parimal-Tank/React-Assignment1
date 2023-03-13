import React from "react";
import aboutus from "../../assets/images/aboutus.svg";
import icon1 from "../../assets/images/Enagagementicon.svg";
import icon2 from "../../assets/images/coomunicationicon.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
  return (
    <div className="about container">
      <section>
        <Container>
          <Row className="flex-column flex-lg-row">
            <Col lg={6}>
              <img src={aboutus} className='about-img img-fluid' alt="aboutus"></img>
            </Col>

            <Col lg={6}>
              <p className="about-text mb-0">About US</p>
              <div className="about-border"><div className='about-text-line'></div></div>
              <p>
                  We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
              </p>
              <Row>
                 <Col>
                      <img src={icon1}  alt="engagement icon"></img>
                      <h3>Engagement</h3>
                      <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                      READ MORE</p>
                 </Col>
                 <Col>
                       <img src={icon2} alt="Communications icon"></img>
                       <h3>Communications</h3>
                       <p>We are award-winning leaders in communications and campaign management.
                       READ MORE</p>
                 </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
