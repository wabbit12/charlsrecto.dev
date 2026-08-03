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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const isProjectsPage = location.pathname.startsWith('/projects');
  const hash = location.hash || '';

  useEffect(() => {
    if (location.pathname !== '/') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;

          if (scrollPosition < 200) {
            setActiveSection('#top');
            ticking = false;
            return;
          }

          const sections = navItems
            .map((item) => item.href.substring(1))
            .filter((id) => id !== 'top');
          const scrollPositionWithOffset = scrollPosition + 200;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          if (scrollPositionWithOffset + windowHeight >= documentHeight - 100) {
            setActiveSection('#contact');
            ticking = false;
            return;
          }

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;

              if (
                scrollPositionWithOffset >= sectionTop - 100 &&
                scrollPositionWithOffset < sectionBottom - 100
              ) {
                setActiveSection(`#${sections[i]}`);
                ticking = false;
                return;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    if (hash) {
      setActiveSection(hash);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, hash]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (isProjectsPage && href === '#projects') return true;
    if (
      href === '#top' &&
      location.pathname === '/' &&
      (activeSection === '' || activeSection === '#top' || window.scrollY < 100)
    )
      return true;
    if (location.pathname === '/' && activeSection === href) return true;
    return false;
  };

  const goToNav = (item) => {
    const sectionId = item.href.substring(1);

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
      setMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
        setActiveSection(item.href);
        window.history.replaceState(null, '', '/');
      }, 100);
    } else {
      scrollToSection(sectionId);
      setActiveSection(item.href);
      window.history.replaceState(null, '', '/');
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 border-x-0 border-t-0 !rounded-none glass">
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
          className="font-brand text-lg sm:text-xl tracking-tight text-ink"
        >
          charlsrecto.dev
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                goToNav(item);
              }}
              className={`relative pb-0.5 transition-colors cursor-pointer ${
                isActive(item.href)
                  ? 'text-ink after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-ink'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToNav({ href: '#contact' });
            }}
            className="hidden sm:inline-flex items-center rounded-xl bg-ink text-paper px-4 py-2 text-sm font-medium hover:bg-white/85 transition-colors cursor-pointer"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 text-ink"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-white/10 !rounded-none border-x-0 bg-white/[0.03] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          <div className="section py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  goToNav(item);
                }}
                className={`py-2.5 text-base font-medium cursor-pointer ${
                  isActive(item.href) ? 'text-ink' : 'text-muted'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goToNav({ href: '#contact' });
              }}
              className="mt-2 inline-flex w-fit items-center rounded-xl bg-ink text-paper px-4 py-2 text-sm font-medium cursor-pointer"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
