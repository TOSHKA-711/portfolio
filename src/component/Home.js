/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import image from "../imgs/Problem solving-bro2.png";
import Footer from "./footer/Footer";
import ScrollReveal from "scrollreveal";
import video from "../imgs/video_2023-12-22_14-03-16.mp4";
import Typed from "react-typed";
function Home() {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-text ", { origin: "top" });
  ScrollReveal().reveal(" col-5 , .home-image", { origin: "bottom" });
  ScrollReveal().reveal(" .rev-left", { origin: "left" });





  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row parent">
            <div className="col  text home-text">
          
              
              <h3>Hello,It's Me</h3>
              <h1 className="rev-left">Ali Mostafa</h1>
              <h3 className="multiple">
                And I'm{" "}
                <span className="multiple-text">a Frontend Developer</span>
              </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, saepe illum? Optio nam omnis numquam sint
                accusantium eos veniam obcaecati?
              </p>
              <div className="icons">
                <a href="https://www.facebook.com/profile.php?id=100027173224339&mibextid=ZbWKwL" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://github.com/TOSHKA-711" target="_blank">
                <FaGithub />
                </a>
                <a href="https://instagram.com/ali_toshka7?igshid=MzRlODBiNWFlZA==" target="_blank">
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ali-eldin-mostafa-a3a8b628b" target="_blank">
                  <FaLinkedinIn />
                </a>
              </div>
              <button className="btn download" >Download Cv</button>
            </div>
         
            <div className="col col-5 home-image">
              <img src={image}></img>
            </div>
          </div>
        </div>

                       {/* video */}
                       
      {/* <div className="video">

       <video src={video} controls muted autoPlay></video>

      </div> */}

      </div>
      <Footer />
    </>
  );
}

export default Home;
