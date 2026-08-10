import { useState } from 'react';
import { carShareCaseStudy } from '../data/features';
import { useInView } from '../hooks/useInView';

export function CarShareCaseStudy() {
  const [activePhase, setActivePhase] = useState(carShareCaseStudy.phases[0].id);
  const { ref, inView } = useInView<HTMLDivElement>();
  const current = carShareCaseStudy.phases.find((p) => p.id === activePhase) ?? carShareCaseStudy.phases[0];

  const phaseColors: Record<string, string> = {
    problem: 'border-warm/30 bg-warm/10 text-warm-muted dark:text-warm',
    decision: 'border-accent/30 bg-accent/10 text-accent',
    outcome: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  };

  return (
    <div
      ref={ref}
      className={`glass-card overflow-hidden ${inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      <div className="border-b border-content-primary/10 bg-surface-overlay/50 px-6 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-content-primary">{carShareCaseStudy.title} — Product Case Study</h3>
            <p className="text-sm text-content-muted">{carShareCaseStudy.subtitle}</p>
          </div>
          <div className="flex rounded-xl border border-content-primary/10 p-1" role="tablist" aria-label="Case study phases">
            {carShareCaseStudy.phases.map((phase) => (
              <button
                key={phase.id}
                type="button"
                role="tab"
                aria-selected={activePhase === phase.id}
                aria-controls={`phase-panel-${phase.id}`}
                id={`phase-tab-${phase.id}`}
                onClick={() => setActivePhase(phase.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activePhase === phase.id
                    ? 'bg-accent text-slate-900'
                    : 'text-content-muted hover:text-content-primary'
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        id={`phase-panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`phase-tab-${current.id}`}
        className="p-6 md:p-8"
      >
        <span
          className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${phaseColors[current.id]}`}
        >
          {current.label}
        </span>
        <h4 className="mt-4 text-xl font-semibold text-content-primary">{current.title}</h4>

        <ul className="mt-6 space-y-3">
          {current.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-content-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        {'metric' in current && current.metric && (
          <div className="mt-8 flex items-center gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <span className="font-display text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              {current.metric.value}
            </span>
            <span className="text-sm text-content-secondary">{current.metric.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
