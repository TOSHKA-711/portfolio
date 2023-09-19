/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="foot">
      <div className="container foot-cont">
        <div className="parent">
          <ul className="list-icons">
            <li>
              <BsFacebook className="icon"/>
            </li>
            <li>
              <BsTwitter  className="icon" />
            </li>
            <li>
              <BsYoutube className="icon"/>
            </li>
            <li>
              <BsLinkedin className="icon"/>
            </li>
            <li>
              <BsInstagram className="icon"/>
            </li>
          </ul>
          <p> ©2023 All rights reserved. Created by T0SHKA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
