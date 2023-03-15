import React from "react";
import engagementImg from "../../assets/images/Engagementvector.svg";
import communicationsImg from "../../assets/images/Coominucationvector.svg";
import facilationImg from "../../assets/images/facilationvector.svg";
import ConsultationImg from "../../assets/images/Consultationvector.svg";
import TrainingImg from "../../assets/images/Trainingvector.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  return (
    <div className="service container">
      <section>
        <Container>
          <div className="service-title-text">
            <div>
              <p className="service-text mb-0">SERVICES</p>
              <div className="service-border">
                <div className="service-text-line"></div>
              </div>
            </div>
          </div>

          <Row className="service-content">
            <Col lg={6}>
              <p className="services-title text-end text-uppercase" >Engagement</p>
              <p className="text-end service-child-text">
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
            </Col>

            <Col lg={6} className='align-items-center'>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={engagementImg}
                alt="services"
                className="img-fluid service-img"
              ></img>
              </div>
            </Col>
          </Row>

          <Row className="my-5 flex-column-reverse flex-lg-row align-items-center">
            <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={communicationsImg}
                alt="services"
                className="img-fluid"
              ></img>
              </div>
            </Col>

            <Col lg={6} className="services-texts">
              <h3 className="services-title">COMMUNICATIONS</h3>
              <p className="services-odd-child-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                pellentesque et. Sit ac fames facilisis nibh faucibus.
              </p>
            </Col>
          </Row>

          <Row className="my-5 align-items-center"> 
            <Col lg={6}>
              <h3 className="services-title text-end">FACILITATION</h3>
              <p className="text-end service-child-text">
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
            </Col>

            <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={facilationImg}
                alt="services"
                className="img-fluid service-img3"
              ></img>
              </div>
            </Col>
          </Row>

          <Row className="my-5 flex-column-reverse flex-lg-row">
            <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={ConsultationImg}
                alt="services"
                className="img-fluid  d-flex justify-content-center"
              ></img>
              </div>
            </Col>

            <Col lg={6} className="services-texts">
              <h3 className="services-title">CONSULTATION AND RESEARCH</h3> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                pellentesque et. Sit ac fames facilisis nibh faucibus.
              </p>
            </Col>
          </Row>

          <Row className="my-5 align-items-center">
            <Col lg={6}>
              <h3 className="services-title text-end">TRANING & MENTORING</h3>
              <p className="text-end service-child-text">
                We love what we do and are driven by achieving great results for
                our clients. Our awards and impressive client list are testament
                to our high quality approach. We deliver value, creaKvity,
                results and excepKonal levels of customer service and
                professionalism. We specialise in infrastructure development,
                energy and natural resources.
              </p>
            </Col>

            <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center">
              <img
                  src={TrainingImg}
                  alt="services"
                  className="img-fluid service-img5"
                ></img>
            </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
