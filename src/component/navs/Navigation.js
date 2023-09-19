/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navigation.css";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {


  let handleClick=(e)=>{
    e.target.classList.toggle("active");
  }

  // let element =document.querySelectorAll(".li");
   
                


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
                <Link to="/" className="li" onClick={handleClick}>
                  Home
                </Link>
                <Link to="/about" className="li" onClick={handleClick}>
                  About
                </Link>
                <Link to="/services" className="li" onClick={handleClick}>
                  Services
                </Link>
                <Link to="/portfolio" className="li" onClick={handleClick}>
                  Portfolio
                </Link>
                <Link to="/contact" className="li" onClick={handleClick}>
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
