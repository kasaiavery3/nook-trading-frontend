import React, { Component } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";
// import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Cart extends Component {
    render() {
        return (
            <div>
                <form className="cart">
                    <Col sm className="item" />
                    <button type="submit" className="btn btn-primary float-right">Checkout</button>
                </form>
                <SideNav />
                <SideBar />
                <Footer />
                <div className="backdrop"></div>
            </div>
        )
    }
}

export default Cart;