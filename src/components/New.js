import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class New extends Component {
    render() {
        return (
            <div className='new'>
                <h3>New!</h3>
                <Container>
                    <Row>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioSquareA" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioHall" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioRock" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioGroundobjectL_Remake_0_0" />
                        </Col>
                        <Col sm className='item'>
                            <Image src="https://acnhapi.com/v1/images/furniture/FtrMarioFablic" />
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

export default New;