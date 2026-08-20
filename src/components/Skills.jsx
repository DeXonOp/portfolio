import React from 'react';
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Skills.css';

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

  // Modern stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  // Modern spring card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      rotateX: 15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 14,
        mass: 1
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Animated Title */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="title-glow"></div>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when slightly scrolled into view
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="skill-card-wrapper"
            >
              <div className="skill-card">
                {/* Glow effect behind icon */}
                <div className="icon-glow-bg"></div>
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                
                <div className="divider"></div>

                <ul className="skill-list">
                  {category.skills.map((skill, i) => (
                    <li key={i}>
                      <span className="bullet"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
