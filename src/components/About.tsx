import { profile, education, achievements, extracurriculars } from '../data/profile';
import { useInView } from '../hooks/useInView';

const highlights = [
  { label: 'Builder', detail: 'Full-stack car sharing platform' },
  { label: 'Investigator', detail: 'SSH brute force mapped to MITRE ATT&CK' },
  { label: 'Leader', detail: 'Ghana Society Secretary — 40 members' },
  { label: 'Strategist', detail: 'Chess enthusiast & critical thinker' },
];

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <div
        ref={ref}
        className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
      >
        <div>
          <span className="section-label">Professional Summary</span>
          <h2 id="about-heading" className="section-title">
            Builder, Investigator &amp; Strategic Thinker
          </h2>
          <p className="mt-4 text-content-secondary">
            University of Leicester graduate (2:1) combining full-stack development with cyber
            security investigation skills.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group rounded-xl border border-content-primary/10 bg-surface-raised/50 p-4 transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                <p className="text-sm font-semibold text-accent">{item.label}</p>
                <p className="mt-1 text-sm text-content-secondary">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-content-secondary">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-accent">
            {profile.bio}
          </p>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-content-muted">
              Education
            </h3>
            <dl className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.institution}
                  className="glass-card group p-5 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
                >
                  <dt className="font-semibold text-content-primary">{item.qualification}</dt>
                  <dd className="mt-1 text-sm text-accent">
                    {item.institution} · {item.period}
                  </dd>
                  <dd className="mt-1 text-sm text-content-secondary">{item.grade}</dd>
                  {'extra' in item && item.extra && (
                    <dd className="mt-1 text-sm text-content-muted">{item.extra}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="font-semibold text-content-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-content-muted">{item.period}</p>
                <p className="mt-2 text-sm text-content-secondary">{item.description}</p>
              </div>
            ))}
            {extracurriculars.map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="font-semibold text-content-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-content-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
