/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {


  let handleClick=(e)=>{
    e.target.classList.toggle("active");
  }

    return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <h1>Portfolio</h1>
            </div>
          </Navbar.Brand>
          <div className="nav-content">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto list" id="list">
                <Link to="/" className="li nav1" onClick={handleClick} id="myButton">
                  Home
                </Link>
                <Link to="/about" className="li nav2" onClick={handleClick} id="myButton">
                  About
                </Link>
                <Link to="/services" className="li nav3" onClick={handleClick} id="myButton">
                  Services
                </Link>
                <Link to="/portfolio" className="li nav4" onClick={handleClick} id="myButton">
                  Portfolio
                </Link>
                <Link to="/contact" className="li nav5" onClick={handleClick} id="myButton">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      <Outlet />
    </>


  );



  
};

export default Navigation;
