export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Charls Dave Recto. All rights reserved.</p>
        <div className="flex gap-4">
          <a 
            href="#top" 
            onClick={handleBackToTop}
            className="hover:text-white transition cursor-pointer"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

