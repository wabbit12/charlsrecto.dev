import Reveal from './Reveal';

const experience = [
  {
    org: 'Cellumove',
    title: 'Developer / After Sales Support',
    dates: 'November 2025 – June 2026',
    bullets: [
      'Streamlined work processes by automating them in Sheets, META, and Shopify.',
      'Developed a chatbot for customer support.',
      'Created an automated emailing system.',
    ],
  },
  {
    org: 'Department of Information and Communications Technology (DICT) – Regional Office II',
    title: 'Intern',
    dates: 'June 2024 – August 2024',
    bullets: [
      'Part of the development of the Job Order System, enhancing internal workflow and operations.',
      'Designed promotional materials for the eLGU launching event in Batanes.',
      'Created various multimedia content (photos and videos) for the HIMAPS Job Fair.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section scroll-mt-24 py-4">
      <Reveal>
        <div className="border-t border-white/15 pt-10 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Where I worked
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4">
        {experience.map((item, idx) => (
          <Reveal key={item.org} delay={0.06 * idx}>
            <div className="glass-panel p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-hero text-lg sm:text-xl font-bold text-ink">
                    {item.org}
                  </h3>
                  <p className="font-medium text-ink/80">{item.title}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-muted tabular-nums border border-white/10 px-2.5 py-1">
                  {item.dates}
                </span>
              </div>
              <ul className="space-y-2 max-w-3xl">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 bg-ink" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
