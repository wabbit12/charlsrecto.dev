import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-lg hover:shadow-primary/30 h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        aria-label={`Learn more about ${project.title}`}
      >
        <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/40 via-slate-900 to-secondary/30 overflow-hidden flex items-center justify-center">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          ) : null}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-slate-900/60 to-transparent" />
        </div>
        <div className="p-6 h-full flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10">
              {project.year}
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-200">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-900/80 border border-white/5 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="pt-2 mt-auto">
            <span className="text-sm font-semibold text-primary group-hover:text-white transition">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

