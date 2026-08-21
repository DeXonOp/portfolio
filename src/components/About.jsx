import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="shape about-shape-1"></div>
      <div className="shape about-shape-2"></div>
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="about-content">
          <div className="about-text reveal reveal-delay-1">
            <p>
              I'm Ayon Pal, a passionate UI/UX Specialist and Frontend Developer. I thrive on building scalable web, mobile, and desktop applications with integrated AI features.
            </p>
            <p>
              I am the Co-Founder of <strong>Winteg Technologies</strong>, where I focus on pushing the boundaries of interactive design and robust development.
            </p>
            <p>
              Currently, I am also proudly associated with an R&D project at <strong>Gainwell Commosales Pvt Ltd</strong>, applying my expertise in building advanced, user-centric solutions.
            </p>
          </div>
          
          <div className="about-stats glass-card reveal reveal-delay-2 hoverable">
            <div className="stat">
              <h3>Co-Founder</h3>
              <p>Winteg Technologies</p>
            </div>
            <div className="stat">
              <h3>R&D</h3>
              <p>Gainwell Commosales</p>
            </div>
            <div className="stat">
              <h3>Specialist</h3>
              <p>UI / UX / Frontend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
