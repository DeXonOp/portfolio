import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Education.css';

const Card = ({ item }) => {
  const container = useRef(null);
  
  // Track scroll progress of THIS specific card's container
  // 'start start' = top of container hits top of viewport (sticks)
  // 'end start' = bottom of container hits top of viewport (scrolls past)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  // As we scroll past, scale it down, fade it out, and add a blur effect!
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const filter = useTransform(scrollYProgress, [0, 0.8], ['blur(0px)', 'blur(12px)']);
  
  return (
    <div ref={container} className="card-container">
      {/* Outer wrapper handles the sticky exit animations (scroll-driven) */}
      <motion.div 
        style={{ scale, opacity, filter }}
        className="sticky-card-wrapper"
      >
        {/* Inner element handles the entry "pop up" animation */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like spring
          viewport={{ once: false, amount: 0.2 }}
          className="sticky-card"
        >
          <span className="education-year">{item.year}</span>
          <h3>{item.degree}</h3>
          <h4>{item.institution}</h4>
          <p>{item.details}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

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
        <div className="education-layout">
          {/* Left Side: Sticky Title */}
          <div className="education-left">
            <h2 className="section-title">Education</h2>
          </div>
          
          {/* Right Side: Animated Cards */}
          <div className="education-right">
            {educationData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
