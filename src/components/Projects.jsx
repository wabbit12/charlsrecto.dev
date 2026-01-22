import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="section scroll-mt-24">
      <Reveal>
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">
              Recent work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Projects</h2>
          </div>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        {projects.map((project, idx) => (
          <Reveal key={project.slug} delay={0.06 * idx} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* Featured Work Section */}
      <div className="mt-24 lg:mt-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">
            Featured Work
          </p>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center mt-6">
          <Reveal delay={0.06}>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Building solutions that make an impact
              </h2>
              <p className="text-lg text-slate-300 max-w-xl">
                Full-stack developer delivering performant, accessible, and responsive apps end-to-end—from APIs to polished UIs.
              </p>
            </div>
          </Reveal>
          <Reveal className="relative" delay={0.1}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-3xl" />
            <Link
              to="/dashboard"
              className="relative glass rounded-3xl p-8 shadow-2xl border-white/10 block cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Featured
                    </p>
                    <p className="text-lg font-semibold">Interactive Dashboard</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Built a responsive analytics dashboard with real-time updates,
                  role-based access, and delightful micro-interactions.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Stack
                    </p>
                    <p className="font-semibold">React, Tailwind, Vite</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Result
                    </p>
                    <p className="font-semibold">+38% engagement</p>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

