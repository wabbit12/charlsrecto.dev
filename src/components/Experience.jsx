import Reveal from './Reveal';

const experience = [
  {
    org: 'Cellumove',
    title: 'Software Developer, After-Sales Systems',
    dates: 'November 2025 – June 2026',
    bullets: [
      'Automated recurring workflows across Google Sheets, Meta, and Shopify, cutting manual after-sales busywork.',
      'Built a customer support chatbot that handled common inquiries and sped up response times.',
      'Shipped an automated emailing system for customer follow-ups and operational notifications.',
    ],
  },
  {
    org: 'Freelance',
    title: 'Full Stack Developer / Front-end Web Developer',
    dates: 'February 2025 – November 2025',
    bullets: [
      'Designed and shipped 7+ production landing pages and marketing sites for SaaS, e-commerce, travel, and service businesses using React, Next.js, and Tailwind CSS.',
      'Owned delivery end-to-end—UI/UX, responsive builds, Framer Motion interactions, and Vercel deployment—with conversion-focused layouts and clear CTAs.',
      'Built product-style interfaces for clients, including recipe discovery, course progress tracking, booking flows, and AI-assisted funnel pages.',
    ],
  },
  {
    org: 'Department of Information and Communications Technology (DICT) – Regional Office II',
    title: 'Intern',
    dates: 'June 2024 – August 2024',
    bullets: [
      'Part of the development team for the Job Order System, helping improve internal workflow and day-to-day operations.',
      'Helped improve work efficiency by ~35% through clearer request tracking and reduced manual handoffs in the Job Order System.',
      'Designed promotional materials for the eLGU launching event in Batanes and produced photo and video content for the HIMAPS Job Fair.',
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
