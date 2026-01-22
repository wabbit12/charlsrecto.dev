import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';
import Reveal from '../components/Reveal';

function PhoneFrame({ children, label, onClick }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[280px] mx-auto">
        {/* Phone frame */}
        <div
          className="relative bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-700 cursor-pointer hover:scale-105 transition-transform"
          onClick={onClick}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl border-x-2 border-b-2 border-slate-700 z-10" />
          {/* Screen */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
            {children}
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600 rounded-full" />
        </div>
        {label && (
          <div className="mt-4 text-center">
            <span className="text-sm font-semibold text-slate-300">{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ImageModal({ image, isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position when modal closes
  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isOpen]);

  if (!image || typeof image === 'string') return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container */}
              <div
                className="relative flex-1 overflow-auto rounded-lg bg-black/50 min-h-0"
                onMouseDown={handleMouseDown}
                style={{ cursor: zoom > 1 ? 'grab' : 'default' }}
              >
                <div className="flex items-center justify-center min-h-full p-4">
                  <img
                    src={image.src}
                    alt={image.label || 'Project screenshot'}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                      transformOrigin: 'center center',
                      transition: isDragging ? 'none' : 'transform 0.2s',
                    }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-red-600/90 hover:bg-red-600 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold transition shadow-lg"
                  aria-label="Close"
                >
                  ×
                </button>
                {/* Zoom controls */}
                <div className="flex flex-col gap-2 bg-black/70 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <button
                    onClick={handleZoomIn}
                    className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg font-bold transition"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg font-bold transition"
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                  {zoom !== 1 && (
                    <button
                      onClick={handleReset}
                      className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs font-semibold transition"
                      aria-label="Reset zoom"
                    >
                      ↺
                    </button>
                  )}
                </div>
              </div>

              {/* Label */}
              {image.label && (
                <div className="mt-4 text-center">
                  <span className="inline-block text-sm font-semibold text-white bg-black/70 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                    {image.label}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ProjectImage({ image, isMobile = false, onImageClick }) {
  if (typeof image === 'string') {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 via-slate-900 to-secondary/25 aspect-[16/10]">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute bottom-3 left-3 text-xs font-semibold text-slate-200/90 rounded-full bg-black/30 px-3 py-1 border border-white/10">
          {image}
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <PhoneFrame label={image.label} onClick={() => onImageClick?.(image)}>
        <img
          src={image.src}
          alt={image.label || 'Project screenshot'}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </PhoneFrame>
    );
  }

  return (
    <div className="space-y-2 flex flex-col items-center">
      <div className="border border-white/10 rounded-lg p-4 bg-slate-900/20 flex items-center justify-center w-full h-72">
        <img
          src={image.src}
          alt={image.label || 'Project screenshot'}
          className="w-full h-full cursor-pointer hover:opacity-90 transition-opacity object-contain"
          onClick={() => onImageClick?.(image)}
          loading="lazy"
          decoding="async"
        />
      </div>
      {image.label && (
        <div className="text-center">
          <span className="text-sm font-semibold text-slate-300">{image.label}</span>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <section className="section pt-12">
        <div className="glass rounded-2xl border-white/10 p-6 sm:p-8 space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="text-slate-300">
            That project doesn&apos;t exist yet. Head back to the projects list.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section pt-12 sm:pt-16 space-y-10">
      <Reveal>
        <div className="space-y-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition"
          >
            ← Back to projects
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10">
              {project.year}
            </span>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl">
            {project.longDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-200 pt-1">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-900/80 border border-white/5 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-12">Sample Screens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(project.images?.length ? project.images : ['Screenshot 1', 'Screenshot 2']).map(
              (img, idx) => {
                // Only aQRo should use mobile phone frames
                const isMobileProject = project.slug === 'aqro-mobile-app';
                
                return (
                  <ProjectImage
                    key={typeof img === 'string' ? img : img.src || idx}
                    image={img}
                    isMobile={isMobileProject}
                    onImageClick={setSelectedImage}
                  />
                );
              },
            )}
          </div>
        </div>
      </Reveal>

      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null);
        }}
      />

      {!!project.highlights?.length && (
        <Reveal delay={0.12}>
          <div className="glass rounded-2xl border-white/10 p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-bold">Highlights</h2>
            <ul className="grid gap-3 text-slate-200">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </section>
  );
}


