import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";
// import { Image } from "react-bootstrap";
import { Button, Col } from "react-bootstrap";
// import { Redirect } from "react-router";

function Cart(props) {

    // const goToCheckout = e => {
    //     history.push(`/checkout/${props.cart.id}`)
    //     localStorage.setItem('cart-id', props.cart.id)
    //     props.setModelOpen(false)
    //     props.setCheckout(true)
    // }

    return (
        <div>
            <form className="cart">
                <Col sm className="item" />
                {/* <button type="submit" className="btn btn-primary float-right" onClick={"/checkout"}>Checkout</button> */}
                <Button href="/checkout">
                    Go to Checkout
                </Button>
            </form>
            <SideNav />
            <SideBar />
            <Footer />
            <div className="backdrop"></div>
        </div>
    )
}

export default Cart;