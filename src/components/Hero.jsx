import { useState } from 'react';
import Reveal from './Reveal';
import HeroMesh from './HeroMesh';
import { motion } from 'framer-motion';

const PROFILE_SRCSET =
  '/images/profile-640.webp 640w, /images/profile.webp 900w';
const PROFILE_SIZES =
  '(max-width: 1023px) min(70vw, 320px), min(36vw, 405px)';
const PROFILE_SRC = '/images/profile.webp';
/** Tiny blur placeholder — paints instantly while the full photo loads */
const PROFILE_LQIP =
  'data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAACwBACdASoSABgAPzmOwVcvKaejqAqp4CcJZQAALnhg3wnW/i4d7AGrfkoUOHOAAP7jB6F/Atp1z9HHHuYn7awhLFSKwvy6Lnxc/MkxlTh+qL4ISjqDqx3IYXwtOAyQXGb1AbjF6RVLmg7wAAA=';

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', '/');
};

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center overflow-hidden py-8 sm:py-10"
    >
      {/* Full-viewport mesh: grid + cursor ripple, fades into the page */}
      <div
        className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_82%,transparent_100%)]"
        aria-hidden
      >
        <div className="absolute inset-0 opacity-75 [mask-image:radial-gradient(ellipse_95%_95%_at_50%_48%,black_32%,transparent_85%)] [-webkit-mask-image:radial-gradient(ellipse_95%_95%_at_50%_48%,black_32%,transparent_85%)]">
          <HeroMesh />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-paper/55 via-transparent via-30% to-paper/80" />
      </div>

      <div className="section relative z-10 flex w-full flex-1 flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <Reveal>
              <p className="font-brand text-2xl sm:text-3xl md:text-4xl text-ink leading-none">
                charlsrecto.dev
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <motion.h1
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.05] tracking-tight text-ink"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                Full-stack developer
                <span className="block text-muted font-semibold text-[0.55em] mt-3 sm:mt-4 tracking-normal">
                  Charls Dave Recto
                </span>
              </motion.h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                Building mobile and web apps end-to-end—APIs, databases, and
                interfaces that feel fast and deliberate.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('projects');
                  }}
                  className="inline-flex items-center rounded-xl bg-ink text-paper px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium hover:bg-white/85 transition-colors"
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
                  className="inline-flex items-center border border-white/25 text-ink px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium glass-panel hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact me
                </motion.a>
              </div>
            </Reveal>
          </div>

          <Reveal
            className="lg:col-span-5 order-1 lg:order-2 w-full flex justify-center lg:justify-end"
            delay={0.1}
          >
            <motion.div
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute -inset-6 sm:-inset-10 bg-white/[0.06] blur-3xl rounded-full pointer-events-none" />
              <motion.div
                className="relative h-[min(42vh,320px)] sm:h-[min(48vh,400px)] lg:h-[min(62vh,540px)] aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-black"
                initial={{ opacity: 0, rotateY: -18, y: 24 }}
                animate={{ opacity: 1, rotateY: -6, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, rotateY: 0 }}
              >
                {/* LQIP backdrop so the frame never looks empty */}
                <img
                  src={PROFILE_LQIP}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 block h-full w-full scale-110 object-cover object-[center_20%] blur-xl"
                />
                <img
                  src={PROFILE_SRC}
                  srcSet={PROFILE_SRCSET}
                  sizes={PROFILE_SIZES}
                  alt="Charls Dave Recto"
                  width={901}
                  height={1200}
                  className={`absolute inset-0 block h-full w-full scale-[1.08] object-cover object-[center_20%] transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
