/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "./footer/Footer";
import ScrollReveal from 'scrollreveal'
function Contact() {

  ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
  });
  
  ScrollReveal().reveal('.rev-top',{origin:'top'});
  ScrollReveal().reveal(' .rev-bot',{origin:'bottom'});
  return (
    <>
      <div className="contact">
        <h2 className="rev-top">
          Contact <span> Me!</span>
        </h2>
        <form action="./action.php" method="post">
          <div className="input-box">
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Email address"></input>
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number"></input>
            <input type="text" placeholder="Email Subject"></input>
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="button rev-bot"></input>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
