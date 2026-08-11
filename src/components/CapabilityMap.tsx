import { useEffect, useMemo, useState } from 'react';
import { capabilityLinks } from '../data/features';
import { useInView } from '../hooks/useInView';

const categories = ['All', ...new Set(capabilityLinks.map((c) => c.category))];

const categoryColors: Record<string, string> = {
  Languages: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'Frameworks & Tools': 'bg-accent/10 text-accent',
  Security: 'bg-red-500/10 text-red-600 dark:text-red-400',
  'Soft Skills': 'bg-warm/10 text-warm-muted dark:text-warm',
};

function SkillIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

export function CapabilityMap() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const { ref, inView } = useInView<HTMLDivElement>();

  const filteredSkills = useMemo(() => {
    if (categoryFilter === 'All') return capabilityLinks;
    return capabilityLinks.filter((c) => c.category === categoryFilter);
  }, [categoryFilter]);

  const selected = capabilityLinks.find((c) => c.skill === selectedSkill);

  useEffect(() => {
    setSelectedSkill(filteredSkills[0]?.skill ?? null);
  }, [filteredSkills]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: capabilityLinks.length };
    capabilityLinks.forEach((c) => {
      counts[c.category] = (counts[c.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div ref={ref} className={inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}>
      <div className="mb-6 text-center">
        <span className="section-label">Applied Skills</span>
        <h3 className="font-display text-2xl font-semibold text-content-primary md:text-3xl">
          Capability Map
        </h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-content-secondary">
          Click a skill to see exactly where I&apos;ve applied it — no buzzwords without evidence.
        </p>
      </div>

      <div className="glass-card overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-accent/5">
        <div
          className="flex flex-wrap gap-2 border-b border-content-primary/10 bg-surface-overlay/30 p-4"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={categoryFilter === cat}
              onClick={() => setCategoryFilter(cat)}
              className={`inline-flex h-9 items-center gap-2 rounded-full px-4 text-xs font-medium transition-all ${
                categoryFilter === cat
                  ? 'bg-accent text-slate-900 shadow-md shadow-accent/20'
                  : 'border border-content-primary/10 bg-surface-raised/60 text-content-muted hover:border-accent/30 hover:text-content-primary'
              }`}
            >
              {cat}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                  categoryFilter === cat ? 'bg-slate-900/15 text-slate-900' : 'bg-content-primary/10'
                }`}
              >
                {categoryCounts[cat] ?? 0}
              </span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div
            className="border-b border-content-primary/10 p-4 lg:border-b-0 lg:border-r lg:p-5"
            role="listbox"
            aria-label="Skills"
          >
            <div className="flex flex-wrap gap-2">
              {filteredSkills.map((item) => {
                const isSelected = selectedSkill === item.skill;
                return (
                  <button
                    key={item.skill}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSkill(item.skill)}
                    className={`skill-pill group inline-flex h-10 max-w-full items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? 'border-accent bg-accent text-slate-900 shadow-md shadow-accent/25'
                        : 'border-content-primary/15 bg-surface-overlay/50 text-content-primary hover:border-accent/40 hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    <SkillIcon />
                    <span className="truncate">{item.skill}</span>
                    <span
                      className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none tabular-nums ${
                        isSelected
                          ? 'bg-slate-900/15 text-slate-900'
                          : 'bg-content-primary/10 text-content-muted group-hover:bg-accent/20 group-hover:text-accent'
                      }`}
                    >
                      {item.work.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-h-[280px] p-4 lg:p-6" aria-live="polite">
            {selected ? (
              <div className="motion-safe:animate-fade-up">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <h4 className="font-display text-lg font-semibold text-content-primary">{selected.skill}</h4>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      categoryColors[selected.category] ?? 'bg-surface-overlay text-content-muted'
                    }`}
                  >
                    {selected.category}
                  </span>
                </div>
                <ul className="space-y-3">
                  {selected.work.map((entry, index) => (
                    <li
                      key={`${entry.title}-${entry.detail}`}
                      className="rounded-xl border border-content-primary/10 bg-surface-overlay/50 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5 motion-safe:animate-fade-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            entry.type === 'project'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-warm/10 text-warm-muted dark:text-warm'
                          }`}
                        >
                          {entry.type}
                        </span>
                        <span className="font-medium text-content-primary">{entry.title}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-content-secondary">{entry.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <SkillIcon />
                </div>
                <p className="max-w-xs text-sm text-content-muted">
                  Select a skill to see linked projects and experience
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
