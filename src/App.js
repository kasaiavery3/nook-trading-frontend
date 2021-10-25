import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken"

// import Nav from './components/Navbar';
// import SideNav from './components/SideNav';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ViewItem from './pages/ViewItem';
import Items from './pages/Items';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideNav from './components/SideNav';
import SideBar from './components/SideBar';
// import './App.scss';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("jwtToken");
  console.log("===> Hitting a Private Route");
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
      console.log("====> Authenticated is now FALSE");
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.getItem("jwtToken"));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log("===> nowCurrent is here.");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      // remove token for localStorage
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };
  return (
    <div>
      <SideBar />
      <SideNav handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute 
          path="/profile" 
          component={Profile} 
          user={currentUser} 
          handleLogout={handleLogout} 
          />
          <Route 
          path="/login" 
          render={(props) => (
            <Login 
              {...props} 
              nowCurrentUser={nowCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
              user={currentUser} 
            />
          )}
        />
        {/* <PrivateRoute 
        path="/checkout/:id"
        component={Checkout}
        setCheckout={setCheckout}
        setModelOpen={setModelOpen}
        setReceipt={setReceipt}
        />
        <Route exact path="/" render={props => {
          return (
            <ProductContainer 
              {...props}
              addtoCart={addtoCart}
              setCheckout={setCheckout}
            />
          )
        }}/> */}
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/view/:item" component={ViewItem} />
        <Route path="/items" component={Items} />
      </Switch>
    </div>
  )
}

export default App