import React from 'react'

import {
    Row,
    Col
} from 'reactstrap'

function Footer() {
  return (
    <>
    <div className='footer container'>
         <Row>
            <Col>
                 <h3>Social</h3>
                    <li><a href='/'><i class="fa fa-facebook"></i> Facebook</a></li>
                    <li><a href='/'><i class="fa fa-linkedin"></i>&nbsp;Linkedin</a></li>
                    <li><a href='/'><i class="fa fa-google"></i>&nbsp;Google +</a></li>
            </Col>
            <Col>
                 <h3>Explore</h3>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Team</a></li>
                    <li><a href='/'>Clients</a></li>
            </Col>
            <Col>
                 <h3>Contact</h3>
                    <li>Address</li>
                    <li>Display</li>
                    <li>1234567890</li>
            </Col>
            <Col>
                 <h3>Email</h3>
                 <li><a href='/'>mendlesoncommunication@email.com</a></li>
            </Col>
         </Row>
    </div>  
    <div className='text-center'>
        <a href='/' className='text-center text-decoration-none text-dark'><i class="fa fa-copyright"></i>Copyright 2018 Mendleson Communication Pty Ltd</a>
    </div>
    </>
  )
}

export default Footer