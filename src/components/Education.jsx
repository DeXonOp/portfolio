import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      year: "2023 — 2027",
      degree: "BCA, Computer Applications",
      institution: "Techno India University",
      details: "CGPA - 8.45 (upto 5th semester)"
    },
    {
      year: "2022 — 2023",
      degree: "12th Grade",
      institution: "Kanchrapara Harnett English Medium School",
      details: "Percentage - 64%"
    },
    {
      year: "2020 — 2021",
      degree: "10th Grade",
      institution: "Kanchrapara Harnett English Medium School",
      details: "Percentage - 64%"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className={`timeline-item reveal reveal-delay-${index + 1}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card hoverable">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4>{item.institution}</h4>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
