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
    <section id="academic" className="section scroll-mt-24 space-y-6">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-primary">
          Academic Profile
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
      </Reveal>
      <div className="grid gap-4">
        {education.map((item, idx) => (
          <Reveal key={item.school} delay={0.08 + 0.04 * idx}>
            <div className="glass rounded-2xl border-white/10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.school}
                  </h3>
                  <p className="text-slate-200">{item.program}</p>
                  <p className="text-slate-300">{item.honor}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10">
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


