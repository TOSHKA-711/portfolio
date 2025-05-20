/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Footer from "./footer/Footer";
import ScrollReveal from "scrollreveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    ScrollReveal().reveal(".rev-top", { origin: "top", distance: "80px", duration: 2000, delay: 200 });
    ScrollReveal().reveal(".rev-bot", { origin: "bottom", distance: "80px", duration: 2000, delay: 200 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("action.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();
      setResponseMessage(result.message);
      if (result.status === "success") {
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact">
        <h2 className="rev-top">
          Contact <span> Me!</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-box">
            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <input type="submit" value="Send Message" className="button rev-bot" />
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
