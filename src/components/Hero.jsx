import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/images/profile.JPG';

export default function Hero() {
  return (
    <section id="top" className="section pt-0 sm:pt-0 lg:pt-0 min-h-screen flex flex-col justify-center relative">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:grid-rows-[auto_1fr] gap-8 sm:gap-10 lg:gap-12 lg:gap-16 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left Column - Heading (mobile: first, desktop: top of left column) */}
        <div className="space-y-8 relative z-10 w-full lg:row-start-1 lg:col-start-1">
          {/* Decorative line */}
          <Reveal>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />
          </Reveal>

          {/* Main heading with 3D effect */}
          <Reveal delay={0.06}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              style={{
                transformStyle: 'preserve-3d',
                textShadow: `
                  0 1px 0 rgba(255, 255, 255, 0.1),
                  0 2px 0 rgba(255, 255, 255, 0.05),
                  0 4px 8px rgba(0, 0, 0, 0.3),
                  0 8px 16px rgba(0, 0, 0, 0.2),
                  0 16px 32px rgba(0, 0, 0, 0.1)
                `,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              I&apos;m Charls Dave Recto,
              <br />
              <span className="text-primary">a Full-Stack Developer</span>
            </motion.h1>
          </Reveal>
        </div>

        {/* Profile Image - appears between heading and rest on mobile, right side on desktop */}
        <Reveal className="relative w-full lg:w-auto lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:self-center" delay={0.1}>
          <motion.div
            className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-none mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              isolation: 'isolate',
            }}
          >
            {/* Glow effect behind photo */}
            <div
              className="absolute -inset-8 sm:-inset-12 lg:-inset-16 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/20 blur-3xl rounded-3xl"
              style={{ zIndex: -1, pointerEvents: 'none' }}
            />

            {/* Photo container with 3D depth */}
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
              style={{
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 40px 80px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
                zIndex: 1,
                position: 'relative',
              }}
            >
              {/* Profile Photo */}
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Charls Dave Recto" 
                  className="w-full h-full object-cover"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse" />
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </Reveal>

        {/* Rest of the content - appears after image on mobile, below heading on desktop */}
        <div className="space-y-8 relative z-10 w-full lg:row-start-2 lg:col-start-1">
          {/* Description with floating effect */}
          <Reveal delay={0.12}>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              I&apos;m a full-stack developer who builds apps for mobile and web. I
              love pairing design systems with fast build tools to ship
              high-quality experiences quickly.
            </motion.p>
          </Reveal>

          {/* Additional description */}
          <Reveal delay={0.18}>
            <motion.p
              className="text-base text-slate-400 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I&apos;ve built full-stack applications, APIs, and databases for
              startups and agencies. From backend logic to polished UIs, I deliver
              end-to-end solutions. Outside of work I explore animation patterns,
              motion design, and ways to make the web feel more human.
            </motion.p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = 'projects';
                  const element = document.getElementById(sectionId);
                  if (element) {
                    // Use scrollIntoView which respects CSS scroll-margin-top
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    // Clear any existing hash from URL
                    window.history.replaceState(null, '', '/');
                  }
                }}
                className="group relative rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 4px 8px rgba(124, 58, 237, 0.3),
                    0 8px 16px rgba(124, 58, 237, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                <span className="relative z-10">View projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = 'contact';
                  const element = document.getElementById(sectionId);
                  if (element) {
                    // Use scrollIntoView which respects CSS scroll-margin-top
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                    // Clear any existing hash from URL
                    window.history.replaceState(null, '', '/');
                  }
                }}
                className="rounded-full border-2 border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-primary/60 hover:text-primary transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                Contact me
              </motion.a>
            </div>
          </Reveal>

          {/* Tech Stack Pills */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300 pt-2">
              <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                React
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                TypeScript
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                Tailwind CSS
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                System Design
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                AI Machine Learning
              </span>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
