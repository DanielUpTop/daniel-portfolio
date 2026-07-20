import { profile, education, achievements, extracurriculars } from '../data/profile';

export function About() {
  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="section-label">Here's a little about me!</span>
          <h2 id="about-heading" className="section-title">
            Crafting & Learning Software With Purpose
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-content-secondary">
          <p>{profile.bio}</p>
          <p>
            My technical work spans full-stack web development — React frontends, Node.js APIs,
            MySQL databases, and Java OOP systems. I also bring experience from American Express
            in risk management and compliance, giving me a well-rounded perspective on building
            software that meets both user needs and organisational standards.
          </p>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-content-muted">
              Education
            </h3>
            <dl className="space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="glass-card p-5">
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
