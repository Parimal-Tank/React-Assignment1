import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
const args = {full: true,
expand:'lg'}
  return (
    <>
      <div className="nav-main">
        
        <Navbar  container  {...args}>
          <NavbarBrand href="/">
            <img className="logo" alt="logo" src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto  d-flex justify-content-around" navbar>
              <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <section>
          <Container>
            <Row>
              <Col lg={6} sm={12}>
                <div className="home">
                 
                </div>
              </Col>  

              <Col lg={6} sm={12}>
                <p className="home-text">
                  Mendleson Communication and Engagement
                </p>
                <p className="home-text-p"> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada sed ipsum, ut quam volutpat, tortor.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

      </div>
    </>
  );
};

export default Navbars;
