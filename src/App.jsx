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
        <StickySection zIndex={1}>
          <Hero />
        </StickySection>
        <StickySection zIndex={2}>
          <About />
        </StickySection>
        <StickySection zIndex={3}>
          <Skills />
        </StickySection>
        <StickySection zIndex={4}>
          <Education />
        </StickySection>
        <StickySection zIndex={5}>
          <Contact />
        </StickySection>
      </main>
      <Footer />
    </>
  );
}

export default App;
