import { useEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="font-display text-sm tracking-widest uppercase text-muted">
      Loading
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash;

    const hasInvalidChars =
      currentPath.includes('&nbsp') ||
      currentPath.includes('%26nbsp') ||
      currentPath.includes('%c2%a0') ||
      currentPath.includes('%C2%A0');

    const isValidPath =
      location.pathname === '/' ||
      location.pathname.startsWith('/projects/') ||
      location.pathname === '/dashboard';

    if (hasInvalidChars || !isValidPath) {
      const timer = setTimeout(() => {
        if (location.pathname !== '/' || location.search || location.hash) {
          window.history.replaceState(null, '', '/');
          navigate('/', { replace: true });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  return (
    <div className="min-h-screen text-ink relative">
      <AnimatedBackground />
      {/* Light veil so glass can frost against the motion, without hiding it */}
      <div
        className="fixed inset-0 bg-paper/40 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        <Header />
        <main className="pb-20 min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
