/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import photo1 from "../imgs/portfolio1.jpg";
import photo2 from "../imgs/portfolio2.jpg";
import photo3 from "../imgs/portfolio3.jpg";
import photo4 from "../imgs/portfolio4.jpg";
import photo5 from "../imgs/portfolio5.jpg";
import photo6 from "../imgs/portfolio6.jpg";
import { FaWpexplorer } from "react-icons/fa";
import { Fragment } from "react";
import Footer from "./footer/Footer";
import ScrollReveal from 'scrollreveal'

function Portfolio() {

  ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:20
  });
  
  ScrollReveal().reveal('.rev-top',{origin:'top'})
  ScrollReveal().reveal('.port-container',{origin:'bottom'});


  return (
    <Fragment>

    <div className="portfolio">
    <h2 className="rev-top">Latest <span>Projects</span></h2>
      <div className="container port-container">
        <div className="portfolio-box">
          <img src={photo1}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photo2}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photo3}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photo4}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photo5}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={photo6}></img>
          <div className="layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, odit!
            </p>
            <a><FaWpexplorer className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="space"></div> */}
    <Footer/>
    </Fragment>
  );
}

export default Portfolio;
