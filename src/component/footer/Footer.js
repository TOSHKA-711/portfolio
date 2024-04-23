/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import {FaLinkedinIn  } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="foot">
      <div className="container foot-cont">
        <div className="parent">
          <ul className="list-icons">
            <li>
               <a href="https://www.facebook.com/profile.php?id=100027173224339&mibextid=ZbWKwL" target="_blank">
                  <FaFacebookF />
                </a>
            </li>
            <li>
            <a href="https://github.com/TOSHKA-711" target="_blank">
                <FaGithub />
                </a>
            </li>
            <li>
            <a href="#">
              <BsYoutube className="icon"/>
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ali-eldin-mostafa-a3a8b628b" target="_blank">
                  <FaLinkedinIn />
                </a>
            </li>
            <li>
            <a href="https://instagram.com/ali_toshka7?igshid=MzRlODBiNWFlZA==" target="_blank">
                  <BsInstagram />
                </a>
            </li>
          </ul>
          <p> ©2023 All rights reserved. Created by T0SHKA</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
