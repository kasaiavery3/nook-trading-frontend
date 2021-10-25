import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";
import axios from "axios";
import Item from "../components/Item";

const ViewItem = () => {
    const pageUrl = window.location.href
    const _id = pageUrl.match(/item\/([\d]*)/)
    const id = _id[1]

    const [allItems, setItems] = useState([]);

    let url = "items/" + id;
    console.log(id);
    console.log("url", url);

    useEffect(() => {
        axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
        axios.get(url).then((response) => {
            setItems(response.data.items);
              console.log("Testing data", response.data.items);
          });
    }, []);

    console.log("STATE", allItems[0]);

    let displayItem = allItems[0] ? (
        <Item itemData={allItems[0]}/>
    ) : (
        <p>Loading...</p>
    );

    return (
        <div>
            {displayItem}
            {/* <Item /> */}
            <SideNav />
            <SideBar />
            <div className="backdrop"></div>
        </div>
    )
}

export default ViewItem;