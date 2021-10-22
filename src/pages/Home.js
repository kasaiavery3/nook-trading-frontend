import React, { Component } from "react";

import SideNav from "../components/SideNav";
import BestSell from "../components/BestSell"
import OnSale from "../components/OnSale";
import New from "../components/New";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <SideNav />
                <SideBar />
                <BestSell />
                <OnSale />
                <New />
                <Footer />
            </div>
        )
    }
}

export default Home;