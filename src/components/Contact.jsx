import React from 'react';
import './Contact.css';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="shape contact-shape-1"></div>
      <div className="shape contact-shape-2"></div>
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        
        <div className="contact-content glass-card reveal reveal-delay-1">
          <div className="contact-info">
            <div className="contact-item hoverable">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:ayonpal33@gmail.com">ayonpal33@gmail.com</a>
            </div>
            <div className="contact-item hoverable">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+918420573673">+91 8420573673</a>
            </div>
            <div className="contact-item hoverable">
              <FaLinkedin className="contact-icon" />
              <a href="https://linkedin.com/in/ayon-pal-25aa15360" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ayon-pal-25aa15360
              </a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>18/2, Kabi Karunanidhan Street, Santipur, 741404, India</p>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3>Let's build something scalable.</h3>
            <p>Available for freelance opportunities and full-time roles.</p>
            <a href="mailto:ayonpal33@gmail.com" className="btn primary-btn hoverable">Say Hello</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
