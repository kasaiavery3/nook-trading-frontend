import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image';

const SideNav = (props) => {
    return (
        <div className='sidenav'>
            <Link to="/" className='logo'><h2>Nook Trading Co.</h2></Link>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/profile" className="btn btn-primary">Profile</Link>
            <Link to="/items" className='btn btn-primary items'>All Items</Link>
            <Link to="/login" className="btn btn-primary">Log In</Link>
            <Link to="/cart" className='cart-btn'>
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </div>
    )
};

export default SideNav;