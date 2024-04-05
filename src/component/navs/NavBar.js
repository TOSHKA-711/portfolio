import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../imgs/logo1.png";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export default function NavBar() {
  let handleClick = (e) => {
    e.target.classList.toggle("active");
  };

  let handleBarsIcon = () => {
    const barsIcon = document.querySelector(".bars-mark");
    const xIcon = document.querySelector(".x-mark");
    const toggleLayer = document.querySelector(`.nav-toggle-layer`);
    toggleLayer.style.width = "50vw";
    toggleLayer.style.opacity = ".8";
    barsIcon.style.display = "none";
    xIcon.style.display = "flex";
  };

  let handleXIcon = () => {
    const barsIcon = document.querySelector(".bars-mark");
    const xIcon = document.querySelector(".x-mark");
    const toggleLayer = document.querySelector(`.nav-toggle-layer`);
    toggleLayer.style.width = "0vw";
    toggleLayer.style.opacity = "0";
    barsIcon.style.display = "flex";
    xIcon.style.display = "none";
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="nav-links">
          <Link to="/" className="li nav1" onClick={handleClick} id="myButton">
            Home
          </Link>
          <Link
            to="/about"
            className="li nav2"
            onClick={handleClick}
            id="myButton"
          >
            About
          </Link>
          <Link
            to="/services"
            className="li nav3"
            onClick={handleClick}
            id="myButton"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="li nav4"
            onClick={handleClick}
            id="myButton"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="li nav5"
            onClick={handleClick}
            id="myButton"
          >
            Contact
          </Link>
          <FaBars className="bars-mark" onClick={handleBarsIcon} />
          <FaXmark className="x-mark" onClick={handleXIcon} />
        </div>
        <div className="nav-phone">
          <a className="phone-num" href="tel:+201021068752">+201021068752</a>
          <a className="phone-icon" href="tel:+201021068752"><FaPhoneAlt /></a>
        </div>
      </div>
      <div className="nav-toggle-layer">
        <Link to="/" className="li nav1" onClick={handleClick} id="myButton">
          Home
        </Link>
        <Link
          to="/about"
          className="li nav2"
          onClick={handleClick}
          id="myButton"
        >
          About
        </Link>
        <Link
          to="/services"
          className="li nav3"
          onClick={handleClick}
          id="myButton"
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          className="li nav4"
          onClick={handleClick}
          id="myButton"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="li nav5"
          onClick={handleClick}
          id="myButton"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
