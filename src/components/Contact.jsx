import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or handle form data here
    console.log("Form submitted");
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="contact-number">Contact Number:</label>
          <input
            type="tel"
            id="contact-number"
            name="contactNumber"
            placeholder="Enter your contact number"
          />
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-media">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <div className="items">
            <FaFacebookSquare />
          </div>
          <div className="items">
            <FaInstagramSquare />
          </div>
          <div className="items">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
