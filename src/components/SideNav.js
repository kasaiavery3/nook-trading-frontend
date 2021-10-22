import React from 'react';
import { Button } from 'react-bootstrap';

const SideNav = (props) => {
    return (
        <div className='sidenav'>
            <h2>Nook Trading Co.</h2>
            <Button href='/home'>Home</Button>
            <Button href='/profile'>Profile</Button>
            <Button href='/login'>Log In</Button>
        </div>
    )
};

export default SideNav;