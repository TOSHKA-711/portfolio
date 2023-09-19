import React from "react";
import image2 from "../imgs/Questions-bro.png";
import Footer from "./footer/Footer";
import ScrollReveal from "scrollreveal";
function About() {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".rev-top", { origin: "top" });
  ScrollReveal().reveal(".rev-bot", { origin: "bottom" });

  return (
    <>
      <div className="about">
        <div className="container parent">
          <div className="about-image">
            <img src={image2} alt="" />
          </div>
          <div className="about-text">
            <h1 className="rev-top">
              About <span>Me</span>
            </h1>
            <h3>Frontend Developer</h3>
            <p className="rev-bot">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur laboriosam sequi assumenda voluptates aliquam
              eligendi, mollitia illum cumque error reiciendis. Eius, nesciunt!
              Labore, dignissimos harum quo blanditiis commodi fugit error?
            </p>
            <button className="rev-bot">Read More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
