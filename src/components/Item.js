import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                        <Col>
                            <div className="btn btn-primary">
                                <Link to="/cart" className="purchase">Purchase</Link>
                            </div>
                            <div className="btn btn-primary">Add to Cart</div>
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Item;