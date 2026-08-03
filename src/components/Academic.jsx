import Reveal from './Reveal';

const education = [
  {
    school: 'Cagayan State University – Carig Campus',
    program: 'Bachelor of Science in Computer Science',
    honor: 'Magna Cum Laude',
    years: '2021 – 2025',
  },
  {
    school: 'Isabela State University - Senior High School',
    program: 'Science, Technology, and Engineering',
    honor: 'With Honors',
    years: '2019 – 2021',
  },
];

export default function Academic() {
  return (
    <section id="academic" className="section scroll-mt-24 py-4">
      <Reveal>
        <div className="border-t border-white/15 pt-10 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
            Academic
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Education
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4">
        {education.map((item, idx) => (
          <Reveal key={item.school} delay={0.06 * idx}>
            <div className="glass-panel p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-hero text-lg sm:text-xl font-bold text-ink">
                    {item.school}
                  </h3>
                  <p className="text-ink/80">{item.program}</p>
                  <p className="text-muted text-sm">{item.honor}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-muted tabular-nums border border-white/10 px-2.5 py-1">
                  {item.years}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
