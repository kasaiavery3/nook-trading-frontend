import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import SideNav from "../components/SideNav";

const Profile = (props) => {
    const { handleLogout, user } = props;
    const { id, name, email, exp } = user;
    const expirationTime = new Date(exp * 100000);
    let currentTime = Date.now();
  
    // make a condition that compares exp and current time
    if (currentTime >= expirationTime) {
      handleLogout();
      alert("Session has ended. Please login to continue.");
    }
  
    const userData = user ? (
      <div>
        <h1>Profile</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>ID: {id}</p>
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  
    const errorDiv = () => {
      return (
        <div className="text-center pt-4">
          <h3>
            Please <Link to="/login">login</Link> to view this page
          </h3>
        </div>
      );
    };

    return (
    // <div className="text-center pt-4">{user ? userData : errorDiv()}</div>
    <div>
        {/* <div className="text-center pt-4">{user ? userData : errorDiv()}</div> */}
        <SideNav />
        <SideBar />
        <Footer />
        <div className="backdrop">
        <div className="text-center pt-4">
            <div className="profilepic">
                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            </div>
            {user ? userData : errorDiv()}</div>
        </div>
    </div>
    )
};

export default Profile;