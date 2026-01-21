import Reveal from './Reveal';

const experience = [
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
    <section id="experience" className="section scroll-mt-24 space-y-6">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Experience
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-3xl sm:text-4xl font-bold">Where I worked</h2>
      </Reveal>

      <div className="grid gap-4">
        {experience.map((item, idx) => (
          <Reveal key={item.org} delay={0.08 + 0.04 * idx}>
            <div className="glass rounded-2xl border-white/10 p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.org}
                  </h3>
                  <p className="text-slate-200 font-semibold">{item.title}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10">
                  {item.dates}
                </span>
              </div>
              <ul className="grid gap-3 text-slate-200">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
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


