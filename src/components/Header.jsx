import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const navItems = [
  { href: '#top', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#academic', label: 'Academic' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const isProjectsPage = location.pathname.startsWith('/projects');
  const hash = location.hash || '';

  // Update active section based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // If near the top, set active to #top (About)
      if (scrollPosition < 200) {
        setActiveSection('#top');
        return;
      }

      const sections = navItems
        .map((item) => item.href.substring(1))
        .filter((id) => id !== 'top'); // Exclude 'top' from section detection
      const scrollPositionWithOffset = scrollPosition + 200; // Offset for header
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (contact section)
      if (scrollPositionWithOffset + windowHeight >= documentHeight - 100) {
        setActiveSection('#contact');
        return;
      }

      // Otherwise, find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if section is in viewport
          if (scrollPositionWithOffset >= sectionTop - 100 && scrollPositionWithOffset < sectionBottom - 100) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    // Set initial active section from hash
    if (hash) {
      setActiveSection(hash);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, hash]);

  const isActive = (href) => {
    if (isProjectsPage && href === '#projects') return true;
    if (href === '#top' && location.pathname === '/' && (activeSection === '' || activeSection === '#top' || window.scrollY < 100)) return true;
    if (location.pathname === '/' && activeSection === href) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-white/5">
      <div className="section flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
              window.history.pushState(null, '', '/');
            }
          }}
          className="text-lg font-semibold text-white tracking-tight"
          style={{
            fontFamily: "'Preospe', sans-serif",
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        >
          charlsrecto.dev
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const handleClick = (e) => {
              e.preventDefault();
              const sectionId = item.href.substring(1); // Remove the #
              
              // Handle #top specially - scroll to top
              if (sectionId === 'top') {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setActiveSection('');
                    window.history.pushState(null, '', '/');
                  }, 100);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('');
                  window.history.pushState(null, '', '/');
                }
                return;
              }
              
              // If not on home page, navigate to home first
              if (location.pathname !== '/') {
                navigate(`/#${sectionId}`);
                // Wait for navigation, then scroll
                setTimeout(() => {
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.href);
                  }
                }, 100);
              } else {
                // Already on home page, update hash and scroll
                window.history.pushState(null, '', item.href);
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.href);
                }
              }
            };

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={`pb-1 transition-all duration-300 cursor-pointer relative ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-primary nav-link-active'
                    : 'text-slate-200 hover:text-white nav-link-hover'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const sectionId = 'contact';
            
            // If not on home page, navigate to home first
            if (location.pathname !== '/') {
              navigate(`/#${sectionId}`);
              setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection('#contact');
                }
              }, 100);
            } else {
              // Already on home page, update hash and scroll
              window.history.pushState(null, '', '#contact');
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActiveSection('#contact');
              }
            }
          }}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition cursor-pointer"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

