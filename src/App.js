import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import sliceLogo from './images/logo-slice.png';
import menu from './images/menu-thin-64.png';


import Home from './pages/Home'
import Music from './pages/Music';
import Store from './pages/Store';
// import TourDates from './pages/TourDates';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Team from './pages/Team';
import Gallery from './pages/Gallery';



import Navbar from 'react-bootstrap/Navbar';


export default function App() {
  return (
    <Router>
      <div className="container-custom">
        <Navbar bg="black" expand="sm">
        <Navbar.Brand id="nav-brand-container" href="/">
          <img
            src={sliceLogo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            id="band-logo"
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <img  src={menu} height="40" width="40" alt="" />
            {/* <button className="hamburger hamburger--elastic" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>   */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="nav-style-custom">
            <nav>
              <NavLink id="menu-item" to="/music">Music</NavLink>

              <NavLink id="menu-item" to="/store">Store</NavLink>

              <NavLink id="menu-item" to="/press">Press</NavLink>

              <NavLink id="menu-item" to="/gallery">Gallery</NavLink>

              {/* <NavLink id="menu-item" to="/tour">Tour</NavLink> */}

              <NavLink id="menu-item" to="/team">Team</NavLink>

              <NavLink id="menu-item" to="/contact">Contact</NavLink>
            </nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/press">
            <Press />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          {/* <Route path="/tour">
            <TourDates />
          </Route> */}
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div className="footer-custom">
          <p className="footer-text">Subtle Orange© 2020</p>
        </div>
      </div>
    </Router>
  );
}


