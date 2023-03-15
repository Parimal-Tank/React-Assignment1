import React from 'react'
import facebook from '../../assets/images/footer img/facebook.svg'
import linkedin from '../../assets/images/footer img/linkedin.svg'
import google from '../../assets/images/footer img/google.svg'
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
                 <h3 className='footer-text-title1'>Social</h3>
                    <li className='footer-text'><a href='/'><img src={facebook} alt='facebook' className='company-logo'></img>  Facebook</a></li>
                    <li className='footer-text'><a href='/'><img src={linkedin} alt='linkedin' className='company-logo'></img> &nbsp;Linkedin</a></li>
                    <li className='footer-text'><a href='/'><img src={google} alt='google' className='company-logo'></img>&nbsp;Google +</a></li>
            </Col>
            <Col>
                 <h3 className='footer-text-title'>Explore</h3>
                    <li className='footer-text'><a href='/'>Services</a></li>
                    <li className='footer-text'><a href='/'>Team</a></li>
                    <li className='footer-text'><a href='/'>Clients</a></li>
            </Col>
            <Col>
                 <h3 className='footer-text-title'>Contact</h3>
                    <li className='footer-text'>Address</li>
                    <li className='footer-text'>Display</li>
                    <li className='footer-text'>1234567890</li>
            </Col>
            <Col>
                 <h3 className='footer-text-title'>Email</h3>
                 <li className='footer-text'><a href='/'>mendlesoncommunication@email.com</a></li>
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