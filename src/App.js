import React, { Component } from 'react';

// import Nav from './components/Navbar';
// import SideNav from './components/SideNav';

import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default App