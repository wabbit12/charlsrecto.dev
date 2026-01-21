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
    // Handle hash navigation on page load/refresh
    if (location.hash) {
      // First, scroll to top instantly to prevent browser's default scroll
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Clear hash immediately and stay at top
      window.history.replaceState(null, '', '/');
    } else {
      // If no hash, ensure we're at top
      window.scrollTo({ top: 0, behavior: 'instant' });
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


