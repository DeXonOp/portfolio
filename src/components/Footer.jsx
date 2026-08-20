import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">AP.</div>
        <div className="footer-copyright">
          &copy; {year} Ayon Pal. Designed with &hearts; and Code.
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com/in/ayon-pal-25aa15360" target="_blank" rel="noopener noreferrer" className="hoverable">LinkedIn</a>
          <a href="mailto:ayonpal33@gmail.com" className="hoverable">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
