import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class OnSale extends Component {
    render() {
        return (
            <div className='onsale'>
                <h3>On Sale!</h3>
                <Container>
                    <Row>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCleaningsetWC_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrPipechair_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCirculator_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrRefrigeratorMini_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrHandcart_Remake_0_0" />
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
}

export default OnSale;