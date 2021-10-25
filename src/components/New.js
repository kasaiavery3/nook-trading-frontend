import React from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function New() {
    return (
        <div className='new'>
            <h3>New!</h3>
            <Container>
                <Row>
                    <Col sm className='item'>
                        <NavLink to={`items/578`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioSquareA" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/579`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioHall" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/577`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioRock" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/585`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioGroundobjectL_Remake_0_0" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/580`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioFablic" />
                        </NavLink>
                    </Col>
                    <Col sm className='scrollbutton'>
                        {/* <Button className='scroll' /> */}
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default New;