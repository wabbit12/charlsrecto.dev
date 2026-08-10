import { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const MOBILE_LIMIT = 8;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = projects.length > MOBILE_LIMIT;

  return (
    <section id="projects" className="section scroll-mt-24 py-4">
      <Reveal>
        <div className="border-t border-white/15 pt-8 mb-8 sm:pt-10 sm:mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
            Selected work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, idx) => {
          const hideOnMobile = !expanded && idx >= MOBILE_LIMIT;
          return (
            <Reveal
              key={project.slug}
              delay={0.05 * idx}
              className={`h-full ${hideOnMobile ? 'hidden md:block' : ''}`}
            >
              <ProjectCard project={project} />
            </Reveal>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-6 flex justify-center md:hidden">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-ink hover:bg-white/[0.08] transition-colors"
          >
            {expanded
              ? 'Show less'
              : `Show all ${projects.length} projects`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
