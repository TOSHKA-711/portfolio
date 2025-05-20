import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BiPaint } from "react-icons/bi";
import { BiBarChartAlt } from "react-icons/bi";
import ScrollReveal from 'scrollreveal'
import Footer from "./footer/Footer";
function Services() {

  ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
  });
  
  ScrollReveal().reveal('.rev-top',{origin:'top'})
  ScrollReveal().reveal(' .rev-bot',{origin:'bottom'})


  return (
    <>
      <div className="services">
        <h2 className="rev-top">
          Our <span>Services</span>
        </h2>
        <div className="container parent rev-bot">
          <div className="child">
            <BiCodeAlt className="icon" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sunt qui culpa maiores eos rerum hic libero. Neque eos aut itaque
              quod? Quibusdam sunt quisquam culpa amet pariatur expedita ad!
            </p>
            <button>Read More</button>
          </div>
          <div className="child">
            <BiPaint className="icon" />
            <h3>Graphic Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sunt qui culpa maiores eos rerum hic libero. Neque eos aut itaque
              quod? Quibusdam sunt quisquam culpa amet pariatur expedita ad!
            </p>
            <button>Read More</button>
          </div>
          <div className="child">
            <BiBarChartAlt className="icon" />
            <h3>Digital Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sunt qui culpa maiores eos rerum hic libero. Neque eos aut itaque
              quod? Quibusdam sunt quisquam culpa amet pariatur expedita ad!
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
