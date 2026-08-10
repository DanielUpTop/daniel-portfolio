import { skills } from '../data/profile';

const allSkills = skills.flatMap((group) => group.items);

export function SkillMarquee() {
  const doubled = [...allSkills, ...allSkills];

  return (
    <div className="relative overflow-hidden border-y border-content-primary/5 bg-surface-overlay/30 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
      <div className="flex motion-safe:animate-marquee">
        {doubled.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="mx-3 shrink-0 rounded-full border border-content-primary/10 bg-surface-raised/80 px-4 py-1.5 text-sm font-medium text-content-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
