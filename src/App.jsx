import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import StatsCounter from './components/StatsCounter';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CommandPalette from './components/CommandPalette';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';
import SectionDivider from './components/SectionDivider';

const tabTitles = ['⟐ Welcome', '⌨ Developer', '⚙ Engineer'];

export default function App() {
  // Dynamic tab title
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      document.title = tabTitles[i % tabTitles.length];
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 noise-bg">
      <Preloader />
      <ParticleBackground />
      <CursorGlow />
      <CommandPalette />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="dots" />
        <Projects />
        <StatsCounter />
        <SectionDivider variant="wave" />
        <Skills />
        <SectionDivider variant="dots" />
        <Experience />
        <SectionDivider variant="line" />
        <Education />
        <SectionDivider variant="wave" />
        <Volunteering />
        <SectionDivider variant="dots" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
