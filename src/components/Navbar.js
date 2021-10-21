import React, { Component } from "react";
// import { Nav, NavLink } from "react-bootstrap";
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

class Navbar extends Component {
    render() {
        return (
        <div>
            <h2>Nook Trading Co.</h2>
            <>
                <Navigation
                    activeItemId="/"
                    onSelect={({itemId}) => {
                    // maybe push to the route

                    }}
                    items={[
                    {
                        title: 'Home',
                        itemId: '/home',
                    },
                    {
                        title: 'Shops',
                        itemId: '/shops',
                    },
                    {
                        title: 'Profile',
                        itemId: '/profile',
                    },
                    ]}
                />
            </>
        </div>
        );
    }
        // return (
        //     <div>
        //         {/* <h3>Nook Trading Co.</h3>
        //         <Nav defaultActiveKey="/home" className="flex-column">
        //         <NavLink href="/home">Active</NavLink>
        //         <NavLink>Link</NavLink>
        //         <NavLink>Link</NavLink>
        //         </Nav> */}
        //     </div>
        // )
}

export default Navbar;