import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Item = (props) => {
    return (
        <div className="view-item container">
            <div>
                <Row>
                    <Col>
                        <Col sm className="view-item item">
                            <Image className="view-item image" src={props.itemData.image} />
                        </Col>
                    </Col>
                    <Col>
                        <h2 className="view-item h2">{props.itemData.name}</h2>
                        <p className="view-item p">From {props.itemData.shop}</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Item;