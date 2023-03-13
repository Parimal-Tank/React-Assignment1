import React from "react";
import engagementImg from "../../assets/images/Engagementvector.svg";
import communicationsImg from "../../assets/images/Coominucationvector.svg";
import facilationImg from "../../assets/images/facilationvector.svg";
import ConsultationImg from "../../assets/images/Consultationvector.svg";
import TrainingImg from "../../assets/images/Trainingvector.svg";
import Underline from '../../assets/images/underline.svg'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <div className="service container">
      <section>
        <Container>
          <Row>
            <p className="service-text mb-0">SERVICES</p>
            <img src={Underline} alt='services' className='underline-img'></img>
            <Col lg={6} >
              <h3>Engagement</h3>
              <p>
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
            </Col>

            <Col lg={6}>
              <img src={engagementImg} alt='services' className="img-fluid service-img"></img>
            </Col>
          </Row>

          <Row className="my-5 flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <img src={communicationsImg} alt='services' className="img-fluid service-img"></img>
            </Col>

            <Col lg={6} className="service2-text">
              <h3>COMMUNICATIONS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                pellentesque et. Sit ac fames facilisis nibh faucibus.
              </p>
            </Col>
          </Row>

          <Row className="my-5">
            <Col lg={6}>
              <h3>FACILITATION</h3>
              <p>
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
            </Col>

            <Col lg={6}>
              <img src={facilationImg} alt='services' className="img-fluid service-img"></img>
            </Col>
          </Row>


          <Row className="my-5 flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <img src={ConsultationImg} alt='services' className="img-fluid service-img"></img>
            </Col>

            <Col lg={6} className='service2-text'>
              <h3>CONSULTATION AND RESEARCH</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. 
              </p>
            </Col>
          </Row>


          <Row className="my-5">
          <Col lg={6}>
            <h3>TRANING & MENTORING</h3>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity,
              results and excepKonal levels of customer service and
              professionalism. We specialise in infrastructure development,
              energy and natural resources.
            </p>
          </Col>

          <Col lg={6}>
            <img src={TrainingImg} alt='services' className="img-fluid service-img"></img>
          </Col>
        </Row>

        </Container>
      </section>
    </div>
  );
};

export default Services;
