import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <Col sm className="item">
            <Link to={{
                pathname: "/items/" + props.itemData.id,
            }}
            >
                <Image src={props.itemData.image} />
            </Link>
        </Col>
    )
}

export default Item;