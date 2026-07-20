import { skills } from '../data/profile';

export function Skills() {
  return (
    <section id="skills" className="section-container" aria-labelledby="skills-heading">
      <div className="mb-12 text-center">
        <span className="section-label">Expertise</span>
        <h2 id="skills-heading" className="section-title">
          Skills &amp; technologies
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-content-secondary">
          Technical and non-technical skills developed through university projects, internships,
          and professional training programmes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, groupIndex) => (
          <div
            key={group.category}
            className="glass-card p-6 transition-colors hover:border-accent/20 motion-safe:animate-fade-up"
            style={{ animationDelay: `${groupIndex * 0.08}s` }}
          >
            <h3 className="mb-4 font-semibold text-accent">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-content-secondary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-warm" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
