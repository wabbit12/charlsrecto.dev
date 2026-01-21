import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Dashboard from './pages/Dashboard';
import AnimatedBackground from './components/AnimatedBackground';
import { Route, Routes } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle URLs with &nbsp or other invalid characters
    const currentPath = location.pathname + location.search + location.hash;
    
    // Check if URL contains &nbsp or invalid characters
    const hasInvalidChars = currentPath.includes('&nbsp') || 
                           currentPath.includes('%26nbsp') ||
                           currentPath.includes('%c2%a0') ||
                           currentPath.includes('%C2%A0');
    
    // Also check if pathname is invalid (not a valid route)
    const isValidPath = location.pathname === '/' || 
                       location.pathname.startsWith('/projects/') || 
                       location.pathname === '/dashboard';
    
    // If URL contains invalid characters or invalid path, redirect to home
    // Use setTimeout to allow catch-all route to render content first
    if (hasInvalidChars || !isValidPath) {
      const timer = setTimeout(() => {
        // Only redirect if we're not already on clean home
        if (location.pathname !== '/' || location.search || location.hash) {
          window.history.replaceState(null, '', '/');
          navigate('/', { replace: true });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  return (
    <div className="min-h-screen text-slate-50 relative">
      <AnimatedBackground />
      <div className="fixed inset-0 bg-slate-950/70 pointer-events-none" style={{ zIndex: -1 }} />
      <Header />
      <main className="pb-24 relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

