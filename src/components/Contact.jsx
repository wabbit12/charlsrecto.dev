const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.3-1.9-1.3-1.9-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1.7 1.7.7 1.7.6.6 1.4.5 1.7.4.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1 .7 2.2.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.7-5.6 6 .4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section scroll-mt-24 space-y-6">
      <p className="text-sm uppercase tracking-[0.2em] text-primary">Contact</p>
      <h2 className="text-3xl sm:text-4xl font-bold">Let&apos;s work together</h2>
      <div className="glass rounded-2xl border-white/10 p-6 sm:p-8 space-y-6">
        <p className="text-slate-200 leading-relaxed">
          Have a project in mind or need help shipping a feature? Send a quick
          brief and I&apos;ll respond within one business day.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Email</p>
            <a
              href="mailto:rectocharlsdave@gmail.com"
              className="text-lg font-semibold text-primary hover:text-white transition"
            >
              rectocharlsdave@gmail.com
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Social</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/wabbit12"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

