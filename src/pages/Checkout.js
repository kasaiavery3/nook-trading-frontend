import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";

function Checkout() {
    return (
        <div className="checkout div">
            <Form className="checkout">
                <Form.Label><h3 className="checkout head">Checkout</h3></Form.Label>
                <Form.Group>
                    <Form.Label><h4 className="checkout head-2">Shipping Information</h4></Form.Label>
                    <Form.Label><h4 className="checkout head-2 contact">Contact Information</h4></Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Tom" />
                    {/* <Form.Group className="contact">
                        <Form.Label className="contact">Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="24680" className="contact" />
                    </Form.Group> */}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Nook" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="1234 Sesame St" />
                    <Form.Control type="text" placeholder="Apt #, Suite, Floor(optional)" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Konoha" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <FloatingLabel controlId="floatingSelectGrid">
                        <Form.Select aria-label="Floating label select example" className="form control">
                            <option>Select</option>
                            <option value="1">Alabama</option>
                            <option value="2">Alaska</option>
                            <option value="3">Arizona</option>
                            <option value="4">Arkansas</option>
                            <option value="5">California</option>
                            <option value="6">Colorado</option>
                            <option value="7">Connecticut</option>
                            <option value="8">Delaware</option>
                            <option value="9">Florida</option>
                            <option value="10">Georgia</option>
                            <option value="11">Hawaii</option>
                            <option value="12">Idaho</option>
                            <option value="13">Illinois</option>
                            <option value="14">Indiana</option>
                            <option value="15">Iowa</option>
                            <option value="16">Kansas</option>
                            <option value="17">Kentucky</option>
                            <option value="18">Louisana</option>
                            <option value="19">Maine</option>
                            <option value="20">Maryland</option>
                            <option value="21">Massachusetts</option>
                            <option value="22">Michigan</option>
                            <option value="23">Minnesota</option>
                            <option value="24">Mississippi</option>
                            <option value="25">Missouri</option>
                            <option value="26">Montana</option>
                            <option value="27">Nebraska</option>
                            <option value="28">Nevada</option>
                            <option value="29">New Hampshire</option>
                            <option value="30">New Jersey</option>
                            <option value="31">New Mexico</option>
                            <option value="32">New York</option>
                            <option value="33">North Carolina</option>
                            <option value="34">North Dakota</option>
                            <option value="35">Ohio</option>
                            <option value="36">Oklahoma</option>
                            <option value="37">Oregon</option>
                            <option value="38">Pennsylvania</option>
                            <option value="39">Rhode Island</option>
                            <option value="40">South Carolina</option>
                            <option value="41">South Dakota</option>
                            <option value="42">Tennessee</option>
                            <option value="43">Texas</option>
                            <option value="44">Utah</option>
                            <option value="45">Vermont</option>
                            <option value="46">Virginia</option>
                            <option value="47">Washington</option>
                            <option value="48">West Virginia</option>
                            <option value="49">Wisconsin</option>
                            <option value="50">Wyoming</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="24680" />
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label><h4 className="checkout head-2">Contact Information</h4></Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="24680" />
                </Form.Group> */}
            </Form>
            <SideNav />
            <SideBar />
            <Footer />
            <div className="backdrop"></div>
        </div>
    )
}

export default Checkout;