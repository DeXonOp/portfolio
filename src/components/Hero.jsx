import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-text">
            <h3 className="reveal reveal-delay-1 hero-greeting">Hello, I'm</h3>
            <h1 className="reveal reveal-delay-2 hero-name">Ayon Pal</h1>
            <h2 className="reveal reveal-delay-3 hero-title">
              UI/UX Specialist & Frontend Developer
            </h2>
            <p className="reveal reveal-delay-3 hero-description">
              Building scalable web, mobile, and desktop AI-integrated applications with a passion for stunning, modernized user experiences.
            </p>
            <div className="reveal reveal-delay-3 hero-buttons">
              <a href="#contact" className="btn primary-btn hoverable">Let's Talk</a>
            </div>
          </div>
          <div className="hero-image-container reveal reveal-delay-2">
            <img src="/profile.png" alt="Ayon Pal" className="hero-image hoverable" />
          </div>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
    </section>
  );
};

export default Hero;
