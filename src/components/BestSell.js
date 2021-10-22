import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class BestSell extends Component {
    render() {
        return (
            <div className='bestsell'>
                <h3>Best Sellers!</h3>
                <Container>
                    <Row>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCuteBedW_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrLampSoftcream_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrPinball_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrGrandlight_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrCuteWorkbench_Remake_0_0" />
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

export default BestSell;