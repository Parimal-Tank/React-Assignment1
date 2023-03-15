import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

import navbarImg from '../../assets/images/home image/Navbarimg.svg'


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
        
        <Navbar  container-full  {...args} className="px-5">
        <div className="px-5 d-flex justify-content-between w-100">
          <NavbarBrand href="/">
            <img className="logo" alt="logo" src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto  d-flex justify-content-around pe-4 nav-title-text" navbar>
              <NavItem>
                <NavLink href="/components/" className="nav-text">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"  className="nav-text">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"  className="nav-text">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"  className="nav-text">Clients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"  className="nav-text">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>

        <section>
          <Container>
            <Row>
              <Col lg={6} sm={12}>
                <div className="home">           
                    <img src={navbarImg} className='img-fluid img1'></img>
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
