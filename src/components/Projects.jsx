import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="section scroll-mt-24 py-4">
      <Reveal>
        <div className="border-t border-white/15 pt-10 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
            Selected work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.slug} delay={0.05 * idx} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
