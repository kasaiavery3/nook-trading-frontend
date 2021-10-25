import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
// import SideNav from "../components/SideNav";
import axios from "axios";
import Item from "../components/Item";

const ViewItem = (props) => {
    const pageUrl = window.location.href
 
    const id = props.match.params.id;
 

    const [item, setItem] = useState({});

    let url = "items/" + id;
    // console.log(id);
    // console.log("url", url);

    useEffect(() => {
        axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
        axios.get(url).then((response) => {
            setItem(response.data.item);
              console.log("Testing data", response.data);
          });
    }, []);

    // console.log("STATE", allItems[0]);

    let displayItem = item ? (
        <Item itemData={item}/>
    ) : (
        <p>Loading...</p>
    );

    return (
        <div>
            {displayItem}
            {/* <Item /> */}
            {/* <SideNav /> */}
            <SideBar />
            <div className="backdrop view-item"></div>
        </div>
    )
}

export default ViewItem;