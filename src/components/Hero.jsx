import { useState, useEffect } from 'react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile.JPG';

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', '/');
};

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profilePhoto;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      id="top"
      className="section min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-12 sm:py-16 lg:py-20"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
          <Reveal>
            <p className="font-brand text-2xl sm:text-3xl md:text-4xl text-ink leading-none">
              charlsrecto.dev
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.h1
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight text-ink"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              Full-stack developer
              <span className="block text-muted font-semibold text-[0.55em] mt-3 tracking-normal">
                Charls Dave Recto
              </span>
            </motion.h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              Building mobile and web apps end-to-end—APIs, databases, and
              interfaces that feel fast and deliberate.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('projects');
                }}
                className="inline-flex items-center rounded-xl bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-white/85 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="inline-flex items-center border border-white/25 text-ink px-6 py-3 text-sm font-medium glass-panel hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact me
              </motion.a>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="lg:col-span-5 order-1 lg:order-2 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          delay={0.1}
        >
          <motion.div
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute -inset-6 sm:-inset-10 bg-white/[0.06] blur-3xl rounded-full pointer-events-none" />
            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-black"
              initial={{ opacity: 0, rotateY: -18, y: 24 }}
              animate={
                imageLoaded
                  ? { opacity: 1, rotateY: -6, y: 0 }
                  : { opacity: 0, rotateY: -18, y: 24 }
              }
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, rotateY: 0 }}
            >
              <img
                src={profilePhoto}
                alt="Charls Dave Recto"
                className="absolute inset-0 block h-full w-full scale-[1.08] object-cover object-[center_20%]"
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
