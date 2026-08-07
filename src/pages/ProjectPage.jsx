import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';
import Reveal from '../components/Reveal';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

function PhoneFrame({ children, label, onClick }) {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[280px] mx-auto">
        <div
          className="relative bg-[#1a1a1a] p-[10px] rounded-[2.25rem] border border-white/20 cursor-pointer hover:scale-[1.02] transition-transform shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          onClick={onClick}
        >
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-paper rounded-full z-10" />
          <div className="relative bg-paper overflow-hidden aspect-[9/19.5] rounded-[1.75rem]">
            {children}
          </div>
          <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/25" />
        </div>
        {label && (
          <div className="mt-3 text-center">
            <span className="text-sm font-medium text-muted">{label}</span>
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

  useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [isOpen]);

  if (!image || typeof image === 'string') return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
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

  const handleMouseUp = () => setIsDragging(false);

  return (
    <AnimatePresence>
      {isOpen && (
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
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative max-w-4xl w-full h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative flex-1 overflow-auto glass-panel min-h-0"
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

            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-10 h-10 bg-ink text-paper border border-white/20 flex items-center justify-center text-xl font-bold hover:bg-white/85 transition"
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex flex-col gap-1 glass-panel p-1">
                <button
                  onClick={handleZoomIn}
                  className="w-8 h-8 hover:bg-white/10 flex items-center justify-center text-ink text-lg font-bold transition"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={handleZoomOut}
                  className="w-8 h-8 hover:bg-white/10 flex items-center justify-center text-ink text-lg font-bold transition"
                  aria-label="Zoom out"
                >
                  −
                </button>
                {zoom !== 1 && (
                  <button
                    onClick={handleReset}
                    className="w-8 h-8 hover:bg-white/10 flex items-center justify-center text-ink text-xs font-semibold transition"
                    aria-label="Reset zoom"
                  >
                    ↺
                  </button>
                )}
              </div>
            </div>

            {image.label && (
              <div className="mt-4 text-center">
                <span className="inline-block text-sm font-medium text-ink glass-panel px-4 py-2">
                  {image.label}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectImage({ image, isMobile = false, onImageClick }) {
  if (typeof image === 'string') {
    return (
      <div className="relative overflow-hidden glass-panel aspect-[16/10] flex items-end p-3">
        <span className="text-xs font-medium text-muted">{image}</span>
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
      <div className="glass-panel p-3 flex items-center justify-center w-full h-72">
        <img
          src={image.src}
          alt={image.label || 'Project screenshot'}
          className="w-full h-full cursor-pointer hover:opacity-80 transition-opacity object-contain"
          onClick={() => onImageClick?.(image)}
          loading="lazy"
          decoding="async"
        />
      </div>
      {image.label && (
        <div className="text-center">
          <span className="text-sm font-medium text-muted">{image.label}</span>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageGroups, setImageGroups] = useState(() => project?.imageGroups ?? null);
  const [screensLoading, setScreensLoading] = useState(() => !!project?.screensLoader);

  useEffect(() => {
    setImageGroups(project?.imageGroups ?? null);
    setScreensLoading(!!project?.screensLoader);

    if (!project?.screensLoader) return undefined;

    let cancelled = false;
    project
      .screensLoader()
      .then((mod) => {
        if (!cancelled) {
          setImageGroups(mod.default ?? mod.imageGroups ?? null);
          setScreensLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setScreensLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="section pt-12">
        <div className="glass-panel p-6 sm:p-8 space-y-4">
          <h1 className="font-display text-2xl font-bold">Project not found</h1>
          <p className="text-muted">
            That project doesn&apos;t exist yet. Head back to the projects list.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:underline underline-offset-4"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section pt-12 sm:pt-16 space-y-12">
      <Reveal>
        <div className="space-y-5 border-b border-white/15 pb-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition"
          >
            ← Back to projects
          </Link>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
            <span className="text-sm text-muted tabular-nums border border-white/10 px-2 py-0.5">
              {project.year}
            </span>
          </div>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            {project.longDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-muted pt-1">
            {project.tech.map((item) => (
              <span
                key={item}
                className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {project.video && (
        <Reveal delay={0.06}>
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold">
              {project.videoLabel || 'Live demo'}
            </h2>
            <div className="glass-panel overflow-hidden">
              <video
                className="w-full aspect-video bg-black/40"
                controls
                playsInline
                preload="metadata"
                poster={project.videoPoster || project.thumbnail}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Reveal>
      )}

      {!!project.howItWorks?.length && (
        <Reveal delay={0.08}>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold">How it works</h2>
              {project.howItWorksIntro && (
                <p className="text-muted max-w-2xl">{project.howItWorksIntro}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.howItWorks.map((item) => (
                <div key={item.step} className="glass-panel p-5 sm:p-6 space-y-3">
                  <span className="text-xs font-medium text-muted tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {(!!imageGroups?.length || screensLoading) && (
        <Reveal delay={0.1}>
          <div className="space-y-10">
            <h2 className="font-display text-2xl font-bold">Sample screens</h2>
            {screensLoading && !imageGroups?.length && (
              <div className="h-[280px] sm:h-[360px] max-w-3xl mx-auto rounded-lg bg-white/[0.03] border border-white/10 animate-pulse" />
            )}
            {imageGroups?.map((group, groupIndex) => (
              <div key={group.id || group.category} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold">{group.category}</h3>
                  {group.description && (
                    <p className="text-sm text-muted max-w-2xl">{group.description}</p>
                  )}
                </div>
                <ThumbnailCarousel
                  eager={groupIndex === 0}
                  items={group.images.map((img, i) => ({
                    id: `${group.id || group.category}-${i}`,
                    url: img.src,
                    title: img.label,
                  }))}
                  onImageClick={setSelectedImage}
                />
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {!imageGroups?.length &&
        !project.screensLoader &&
        (project.images?.length || !project.video) && (
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Sample screens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(project.images?.length
                ? project.images
                : ['Screenshot 1', 'Screenshot 2']
              ).map((img, idx) => {
                const isMobileProject = project.slug === 'aqro-mobile-app';

                return (
                  <ProjectImage
                    key={typeof img === 'string' ? img : img.src || idx}
                    image={img}
                    isMobile={isMobileProject}
                    onImageClick={setSelectedImage}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      )}

      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {!!project.highlights?.length && (
        <Reveal delay={0.12}>
          <div className="glass-panel p-6 sm:p-8 space-y-4">
            <h2 className="font-body text-2xl font-semibold tracking-tight">Highlights</h2>
            <ul className="grid gap-3 text-muted">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 bg-ink" />
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
