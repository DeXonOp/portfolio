import React, { useRef, useEffect, useState } from 'react';
import './StickySection.css';

const StickySection = ({ children, zIndex }) => {
  const trackerRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    // Calculate sticky top offset to handle sections taller than viewport
    const calculateOffset = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        if (height > windowHeight) {
          setTopOffset(windowHeight - height);
        } else {
          setTopOffset(0);
        }
      }
    };

    calculateOffset();
    window.addEventListener('resize', calculateOffset);

    // Handle scroll for scale and brightness effect
    const handleScroll = () => {
      if (!trackerRef.current || !contentRef.current) return;

      const trackerRect = trackerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The sticky container sticks when trackerRect.top reaches topOffset
      const stickPoint = topOffset;

      if (trackerRect.top <= stickPoint) {
        // How far we have scrolled PAST the stick point
        const scrolledPast = stickPoint - trackerRect.top;

        // Progress based on window height
        let progress = scrolledPast / windowHeight;

        if (progress > 1) progress = 1;
        if (progress < 0) progress = 0;

        // Scale down to 0.9
        setScale(1 - (progress * 0.1));
        // Darken to 0.4
        setBrightness(1 - (progress * 0.6));
      } else {
        setScale(1);
        setBrightness(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('resize', calculateOffset);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topOffset]);

  return (
    <>
      {/* Invisible tracker in normal flow */}
      <div ref={trackerRef} style={{ height: '0px', width: '100%' }} />

      {/* Sticky container */}
      <div
        ref={containerRef}
        className="sticky-container"
        style={{
          position: 'sticky',
          top: `${topOffset}px`,
          zIndex,
        }}
      >
        {/* Transforming content wrapper */}
        <div
          ref={contentRef}
          className="sticky-content-wrapper"
          style={{
            transform: `scale(${scale})`,
            filter: `brightness(${brightness})`,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default StickySection;
