import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-card">
      <div className="header-container">
        <a href="#hero" className="logo">
          <img src="/profile.png" alt="Ayon Pal" className="logo-img" />
          Ayon
        </a>
        <nav className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
