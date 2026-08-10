import { experience } from '../data/profile';
import { useInView } from '../hooks/useInView';

const categoryColors: Record<string, string> = {
  'Cyber Security': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  'Full-Stack Development': 'bg-accent/10 text-accent border-accent/20',
  'Frontend Development': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Professional Development': 'bg-warm/10 text-warm-muted dark:text-warm border-warm/20',
};

export function Experience() {
  const { ref, inView } = useInView<HTMLOListElement>();

  return (
    <section id="experience" className="section-container" aria-labelledby="experience-heading">
      <div className="mb-12">
        <span className="section-label">Career</span>
        <h2 id="experience-heading" className="section-title">
          Professional Experience
        </h2>
        <p className="mt-3 max-w-xl text-content-secondary">
          Technical builds, workshops, bootcamps, and industry programmes that shaped my skills
          across full-stack development and cyber security.
        </p>
      </div>

      <ol
        ref={ref}
        className={`relative space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-accent/40 before:via-content-primary/10 before:to-warm/40 md:before:left-[23px] ${
          inView ? '' : 'opacity-0'
        }`}
      >
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${item.period}`}
            className={`relative pl-12 md:pl-14 ${inView ? 'motion-safe:animate-fade-up' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span
              className="absolute left-3 top-1.5 flex h-3 w-3 rounded-full border-2 border-accent bg-surface shadow-[0_0_12px_rgba(61,214,200,0.5)] md:left-4"
              aria-hidden="true"
            />

            <article className="glass-card group p-6 transition-all hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {'category' in item && item.category && (
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          categoryColors[item.category] ?? 'bg-surface-overlay text-content-muted'
                        }`}
                      >
                        {item.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-content-primary transition-colors group-hover:text-accent">
                    {item.role}
                  </h3>
                  <p className="font-medium text-accent">{item.company}</p>
                  <p className="text-sm text-content-muted">{item.program}</p>
                </div>
                <time className="shrink-0 rounded-lg bg-surface-overlay px-3 py-1 text-sm font-medium text-content-muted">
                  {item.period}
                </time>
              </div>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-content-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
