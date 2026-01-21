import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section scroll-mt-24 space-y-6">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-primary">About</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-3xl sm:text-4xl font-bold">Who I am</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="glass rounded-2xl border-white/10 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-8 items-start">
            {/* Photo placeholder - replace with your actual image */}
            <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-white/10 overflow-hidden flex items-center justify-center">
              {/* Replace this div with: <img src={yourPhoto} alt="Your Name" className="w-full h-full object-cover" /> */}
              <svg className="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="space-y-4">
              <p className="text-slate-200 leading-relaxed">
                I&apos;m a full-stack developer who builds apps for mobile and web. I
                love pairing design systems with fast build tools to ship
                high-quality experiences quickly.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I&apos;ve delivered dashboards, marketing sites, and internal tools for
                startups and agencies. Outside of work I explore animation patterns,
                motion design, and ways to make the web feel more human.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

