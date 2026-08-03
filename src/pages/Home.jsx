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
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setTimeout(() => {
            window.history.replaceState(null, '', '/');
          }, 100);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        window.history.replaceState(null, '', '/');
      }
    }
  }, [location.hash]);

  try {
    return (
      <div>
        <Hero />
        <div className="mt-6 sm:mt-10 space-y-16 sm:space-y-24">
          <Projects />
          <Academic />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home:', error);
    return (
      <div className="section pt-12">
        <h1 className="text-ink">Error loading content. Please check console.</h1>
      </div>
    );
  }
}
