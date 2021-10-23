import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";

const Items = () => {
    const [allItems, setItems] = useState([])

    let url = "items/"

    useEffect(() => {
        axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    })

    return (
        <div>
            <SideNav />
            <SideBar />
            <Footer />
            <div className="backdrop"></div>
        </div>
    )
}

export default Items;