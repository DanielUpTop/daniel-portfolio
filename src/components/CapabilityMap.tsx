import { useMemo, useState } from 'react';
import { capabilityLinks } from '../data/features';
import { useInView } from '../hooks/useInView';

const categories = ['All', ...new Set(capabilityLinks.map((c) => c.category))];

export function CapabilityMap() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const { ref, inView } = useInView<HTMLDivElement>();

  const filteredSkills = useMemo(() => {
    if (categoryFilter === 'All') return capabilityLinks;
    return capabilityLinks.filter((c) => c.category === categoryFilter);
  }, [categoryFilter]);

  const selected = capabilityLinks.find((c) => c.skill === selectedSkill);

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

      <div className="glass-card overflow-hidden">
        <div className="flex flex-wrap gap-2 border-b border-content-primary/10 p-4" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={categoryFilter === cat}
              onClick={() => {
                setCategoryFilter(cat);
                setSelectedSkill(null);
              }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                categoryFilter === cat
                  ? 'bg-accent text-slate-900'
                  : 'bg-surface-overlay text-content-muted hover:text-content-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="flex flex-wrap gap-2 p-4 lg:border-r lg:border-content-primary/10" role="listbox" aria-label="Skills">
            {filteredSkills.map((item) => {
              const isSelected = selectedSkill === item.skill;
              return (
                <button
                  key={item.skill}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSkill(isSelected ? null : item.skill)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                    isSelected
                      ? 'border-accent bg-accent/15 text-accent shadow-sm shadow-accent/10'
                      : 'border-content-primary/15 text-content-secondary hover:border-accent/40 hover:text-content-primary'
                  }`}
                >
                  {item.skill}
                  <span className="ml-1.5 text-xs text-content-muted">({item.work.length})</span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[200px] p-4 lg:p-6" aria-live="polite">
            {selected ? (
              <div>
                <h4 className="font-semibold text-content-primary">
                  {selected.skill}
                  <span className="ml-2 text-sm font-normal text-content-muted">{selected.category}</span>
                </h4>
                <ul className="mt-4 space-y-3">
                  {selected.work.map((entry) => (
                    <li
                      key={`${entry.title}-${entry.detail}`}
                      className="rounded-xl border border-content-primary/10 bg-surface-overlay/50 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-2 py-0.5 text-xs font-medium ${
                            entry.type === 'project'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-warm/10 text-warm-muted dark:text-warm'
                          }`}
                        >
                          {entry.type}
                        </span>
                        <span className="font-medium text-content-primary">{entry.title}</span>
                      </div>
                      <p className="mt-1 text-sm text-content-secondary">{entry.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full min-h-[180px] items-center justify-center text-center">
                <p className="text-sm text-content-muted">
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
