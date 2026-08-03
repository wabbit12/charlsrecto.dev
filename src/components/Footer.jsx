export default function Footer() {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 !rounded-none glass relative z-10">
      <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Charls Dave Recto</p>
        <a
          href="#top"
          onClick={handleBackToTop}
          className="text-ink hover:underline underline-offset-4 cursor-pointer"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
