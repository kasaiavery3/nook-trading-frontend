import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function OnSale() {
    return (
        <div className='onsale'>
            <h3>On Sale!</h3>
            <Container>
                <Row>
                    <Col sm className='item'>
                        <NavLink to={`items/503`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCleaningsetWC_Remake_0_0" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/174`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrPipechair_Remake_0_0" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/3`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_0_0" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/310`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrRefrigeratorMini_Remake_0_0" />
                        </NavLink>
                    </Col>
                    <Col sm className='item'>
                        <NavLink to={`items/216`}>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrHandcart_Remake_0_0" />
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

export default OnSale;