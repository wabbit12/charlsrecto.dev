const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-current">
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.5-1.3-1.9-1.3-1.9-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1.7 1.7.7 1.7.6.6 1.4.5 1.7.4.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1 .7 2.2.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.9 5.7-5.6 6 .4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section scroll-mt-24 py-4 pb-8">
      <div className="border-t border-white/15 pt-10">
        <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          Let&apos;s work together
        </h2>

        <div className="glass-panel p-6 sm:p-10 space-y-8">
          <p className="text-muted leading-relaxed max-w-2xl">
            Have a project in mind or need help shipping a feature? Send a quick
            brief and I&apos;ll respond within one business day.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Email
              </p>
              <a
                href="mailto:rectocharlsdave@gmail.com"
                className="text-lg sm:text-xl font-display font-bold text-ink hover:underline underline-offset-4 break-all"
              >
                rectocharlsdave@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.15em] text-muted">
                Social
              </p>
              <a
                href="https://github.com/wabbit12"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink font-medium hover:underline underline-offset-4"
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
