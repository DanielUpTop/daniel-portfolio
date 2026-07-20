import { experience } from '../data/profile';

export function Experience() {
  return (
    <section id="experience" className="section-container" aria-labelledby="experience-heading">
      <div className="mb-12">
        <span className="section-label">Career</span>
        <h2 id="experience-heading" className="section-title">
          Experience &amp; training
        </h2>
        <p className="mt-3 max-w-xl text-content-secondary">
          Internships, workshops, and professional programmes that shaped my technical and business skills.
        </p>
      </div>

      <ol className="relative space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-content-primary/10 md:before:left-[23px]">
        {experience.map((item, index) => (
          <li
            key={`${item.company}-${item.period}`}
            className="relative pl-12 motion-safe:animate-fade-up md:pl-14"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <span
              className="absolute left-3 top-1.5 flex h-3 w-3 rounded-full border-2 border-accent bg-surface md:left-4"
              aria-hidden="true"
            />

            <article className="glass-card p-6 md:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-content-primary">{item.role}</h3>
                  <p className="font-medium text-accent">{item.company}</p>
                  <p className="text-sm text-content-muted">{item.program}</p>
                </div>
                <time className="shrink-0 text-sm text-content-muted">{item.period}</time>
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
