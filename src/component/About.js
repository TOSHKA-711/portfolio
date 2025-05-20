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
              I am a Frontend Developer with over a year of experience. I have
              worked remotely for two companies and have also gained valuable
              experience as a freelancer. I specialize in building interactive
              and modern user interfaces using React.js, and I am proficient in
              technologies like Next.js, TypeScript, and Tailwind CSS. I am
              always eager to enhance my skills and create seamless,
              user-friendly experiences.
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
