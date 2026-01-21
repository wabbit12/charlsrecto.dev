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
    // Handle URLs with &nbsp or other invalid characters - redirect to home
    const currentPath = location.pathname + location.search + location.hash;
    
    // Check if URL contains &nbsp or invalid characters
    const hasInvalidChars = currentPath.includes('&nbsp') || 
                           currentPath.includes('%26nbsp') ||
                           currentPath.includes('%c2%a0') ||
                           currentPath.includes('%C2%A0');
    
    // If URL contains invalid characters and we're not already on home, redirect
    if (hasInvalidChars && location.pathname !== '/') {
      navigate('/', { replace: true });
      return;
    }
    
    // If on home page with invalid chars in hash/search, clean it
    if (hasInvalidChars && location.pathname === '/') {
      navigate('/', { replace: true });
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative">
      <AnimatedBackground />
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

