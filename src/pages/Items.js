import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
// import Item from "../components/Item";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";

const Items = () => {
    const [allItems, setItems] = useState([])

    let url = "items/"

    useEffect(() => {
        axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
        axios.get(url).then((response) => {
            // console.log(response.data.items)
            setItems(response.data.items)
        })
    }, [])

    function allItemsList(n, response) {
        let itemArr = [];
        for (let i = 0; i < n; i++) {
            if (allItems[i]["image"]) {
                itemArr.push(
                    <Col sm className="item" key={allItems[i]["id"]}>
                        <NavLink to={`items/${allItems[i].id}`}>
                            <Image src={allItems[i]["image"]} />
                        </NavLink>
                    </Col>
                )
            }
        }
        return itemArr;
    }

    let displayAllItemsList = allItems.length ? (
        allItemsList(allItems.length) 
    ) : (
        <div className="loading-screen">
                <p>Loading...</p>
        </div>
    );

    return (
        <div>
            <Row className="allitems">{displayAllItemsList}</Row>
            <SideNav />
            <SideBar />
            <Footer />
            <div className="backdrop"></div>
        </div>
    )
}

export default Items;