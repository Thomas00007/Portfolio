import Home from './components/home.jsx'
import About from './components/about.jsx'
import Experience from './components/experience.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import CustomCursor from "./components/customCursor.jsx"
import './assets/css/App.css'
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  useEffect(() => {
      const lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: false,

        lerp: 0.12,
        duration: 0.9,
        wheelMultiplier: 1.1
      });

      let rafId;
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }, []);

  return (
    <>
      <CustomCursor />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <div className="blur-stack">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </>
  )
}

export default App
