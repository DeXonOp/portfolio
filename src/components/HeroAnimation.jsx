import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import './HeroAnimation.css';

const HeroAnimation = () => {
  // Floating animation variant
  const floatVariant = (delay = 0, duration = 4, yOffset = -20) => ({
    animate: {
      y: [0, yOffset, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <div className="hero-animation-container">
      {/* Central Profile Image */}
      <div className="center-profile-container">
        <div className="pulse-ring"></div>
        <img src="/profile.png" alt="Ayon Pal" className="center-profile" />
      </div>
      
      {/* Floating Tech Icons */}
      <motion.div 
        className="floating-icon icon-react"
        variants={floatVariant(0, 5, -30)}
        animate="animate"
      >
        <FaReact />
      </motion.div>
      
      <motion.div 
        className="floating-icon icon-js"
        variants={floatVariant(1, 4.5, -25)}
        animate="animate"
      >
        <FaJs />
      </motion.div>

      <motion.div 
        className="floating-icon icon-html"
        variants={floatVariant(2, 6, -35)}
        animate="animate"
      >
        <FaHtml5 />
      </motion.div>

      <motion.div 
        className="floating-icon icon-css"
        variants={floatVariant(0.5, 5.5, -20)}
        animate="animate"
      >
        <FaCss3Alt />
      </motion.div>

      <motion.div 
        className="floating-icon icon-node"
        variants={floatVariant(1.5, 4, -25)}
        animate="animate"
      >
        <FaNodeJs />
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
