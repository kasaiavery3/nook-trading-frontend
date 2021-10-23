import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <Col sm className="item">
            <Link to={{
                pathname: "/item/" + props.itemData.id,
            }}
            >
                <img src={props.itemData.image} />
            </Link>
        </Col>
    )
}