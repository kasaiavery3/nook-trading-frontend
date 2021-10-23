import React, { Component } from "react";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";

class Checkout extends Component {
    render() {
        return (
            <div>
                <SideNav />
                <SideBar />
            </div>
        )
    }
}

export default Checkout;