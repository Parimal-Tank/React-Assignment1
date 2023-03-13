import React from 'react'
import person1 from "../../assets/images/Person1.svg";
import person2 from "../../assets/images/Person2.svg";
import person3 from "../../assets/images/Person3.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  return (
    <div>
        <h3 className='text-center container'>OUR TEAM</h3>
        <div className="team-border"><div className='team-text-line'></div></div>

        <div className='d-flex justify-content-center'>
           
        <Row>
            <Col>
                <img src={person1} alt='person1'></img> 
                <p className='text-center my-3'>Jessica D'suza</p>
            </Col>

            <Col>
                <img src={person2} alt='person2'></img>
                <p className='text-center my-3'>Johny Williams</p>
            </Col>

            <Col>
                <img src={person3} alt='person3'></img>
                <p className='text-center my-3'>Sanya R.</p>
            </Col>
        </Row>
           
        </div>
    </div>  
  )
}

export default Team
