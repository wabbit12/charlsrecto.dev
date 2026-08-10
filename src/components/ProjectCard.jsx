import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CONTAIN_THUMBNAIL_SLUGS = new Set([
  'voyage',
  'verdura',
  'aqro-mobile-app',
  'dictionary-app-java',
  'roomba-boarding-house-finder',
]);

function ProjectCard({ project }) {
  const isExternal = !!project.externalLink;
  const containThumbnail = CONTAIN_THUMBNAIL_SLUGS.has(project.slug);
  const linkProps = isExternal
    ? {
        href: project.externalLink,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to: `/projects/${project.slug}`,
      };

  const LinkComponent = isExternal ? 'a' : Link;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group h-full glass-panel flex flex-col overflow-hidden"
    >
      <LinkComponent
        {...linkProps}
        className="block h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        aria-label={
          isExternal ? `Visit ${project.title}` : `Learn more about ${project.title}`
        }
      >
        <div
          className={`relative aspect-[16/10] bg-white/[0.03] overflow-hidden flex-shrink-0 border-b border-white/10 ${
            containThumbnail ? 'flex items-center justify-center' : ''
          }`}
        >
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={
                containThumbnail
                  ? 'max-w-full max-h-full object-contain'
                  : 'absolute inset-0 w-full h-full object-cover'
              }
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-hero text-xl font-bold text-ink flex-1">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs font-medium text-muted tabular-nums border border-white/10 px-2 py-0.5">
              {project.year}
            </span>
          </div>
          <p className="text-muted leading-relaxed mb-4 flex-grow text-sm sm:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-muted mb-4">
            {project.tech.map((item) => (
              <span
                key={item}
                className="border border-white/10 bg-white/[0.03] px-2.5 py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="pt-2 mt-auto border-t border-white/10">
            <span className="inline-block pt-3 text-sm font-medium text-ink group-hover:underline underline-offset-4">
              {isExternal ? 'Visit site →' : 'Learn more →'}
            </span>
          </div>
        </div>
      </LinkComponent>
    </motion.article>
  );
}

export default memo(ProjectCard);
