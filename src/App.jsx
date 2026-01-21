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
    const pathname = decodeURIComponent(location.pathname);
    const search = location.search;
    const hash = location.hash;
    
    // Check if URL contains &nbsp, nbsp entity, or invalid characters
    const fullUrl = pathname + search + hash;
    const hasInvalidChars = fullUrl.includes('&nbsp') || 
                           fullUrl.includes('\u00A0') ||
                           fullUrl.includes('%C2%A0') ||
                           fullUrl.includes('%26nbsp') ||
                           fullUrl.includes('%c2%a0');
    
    // If URL contains invalid characters, redirect to home immediately
    if (hasInvalidChars) {
      navigate('/', { replace: true });
      return;
    }
    
    // Clean up trailing whitespace
    const cleanPathname = pathname.replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '').trim();
    const cleanSearch = search.replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '').trim();
    const cleanHash = hash.replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, '').trim();
    
    // If URL needs cleaning, redirect to clean version
    if (pathname !== cleanPathname || search !== cleanSearch || hash !== cleanHash) {
      const cleanUrl = cleanPathname + cleanSearch + cleanHash;
      navigate(cleanUrl, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative">
      <AnimatedBackground />
      <Header />
      <main className="pb-24 relative z-10">
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

