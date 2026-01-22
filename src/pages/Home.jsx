import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Academic from '../components/Academic';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load/refresh - scroll to section then clear hash
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the #
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear hash after scrolling starts to prevent it from persisting on refresh
          setTimeout(() => {
            window.history.replaceState(null, '', '/');
          }, 100);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // If element not found, clear hash immediately
        window.history.replaceState(null, '', '/');
      }
    }
  }, [location.hash]);

  try {
    return (
      <div className="space-y-24">
        <Hero />
        <Projects />
        <Academic />
        <Experience />
        <Skills />
        <Contact />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home:', error);
    return (
      <div className="section pt-12">
        <h1 className="text-white">Error loading content. Please check console.</h1>
      </div>
    );
  }
}


