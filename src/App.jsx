import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

import StickySection from './components/StickySection';

function App() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Header />
      <main style={{ position: 'relative' }}>
        <StickySection zIndex={1} id="hero">
          <Hero />
        </StickySection>
        <StickySection zIndex={2} id="about">
          <About />
        </StickySection>
        <StickySection zIndex={3} id="skills">
          <Skills />
        </StickySection>
        <StickySection zIndex={4} id="education">
          <Education />
        </StickySection>
        <StickySection zIndex={5} id="contact">
          <Contact />
        </StickySection>
      </main>
      <Footer />
    </>
  );
}

export default App;
