import React from 'react';
import './Skills.css';
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & UI",
      icon: <FaLaptopCode />,
      skills: ["React", "HTML", "CSS", "JavaScript", "UI/UX Design"]
    },
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Backend & DB",
      icon: <FaDatabase />,
      skills: ["SQL (MySQL/PostgreSQL)", "Basic Backend"]
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      skills: ["Git", "VS Code", "MS Office", "Ethical Hacking"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Arsenal</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-card reveal reveal-delay-${(index % 3) + 1} hoverable`}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
