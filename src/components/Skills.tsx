import { skills } from '../data/profile';
import { useInView } from '../hooks/useInView';
import { SkillMarquee } from './SkillMarquee';

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <>
      <SkillMarquee />

      <section id="skills" className="section-container" aria-labelledby="skills-heading">
        <div className="mb-12 text-center">
          <span className="section-label">Expertise</span>
          <h2 id="skills-heading" className="section-title">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-content-secondary">
            Technical and non-technical skills developed through university projects, independent
            builds, workshops, and professional training programmes.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${inView ? '' : 'opacity-0'}`}
        >
          {skills.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`glass-card group relative overflow-hidden p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${
                inView ? 'motion-safe:animate-fade-up' : ''
              }`}
              style={{ animationDelay: `${groupIndex * 0.08}s` }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
              <h3 className="relative mb-4 font-semibold text-accent">{group.category}</h3>
              <ul className="relative space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-content-secondary transition-colors group-hover:text-content-primary"
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
    </>
  );
}
