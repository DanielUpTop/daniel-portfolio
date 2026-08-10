import { useState } from 'react';
import { socInvestigationSteps } from '../data/features';
import { useInView } from '../hooks/useInView';

export function SocInvestigationWalkthrough() {
  const [activeStep, setActiveStep] = useState(socInvestigationSteps[0].id);
  const { ref, inView } = useInView<HTMLDivElement>();
  const current = socInvestigationSteps.find((s) => s.id === activeStep) ?? socInvestigationSteps[0];
  const stepIndex = socInvestigationSteps.findIndex((s) => s.id === activeStep);

  return (
    <div
      ref={ref}
      className={`glass-card overflow-hidden ${inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      <div className="border-b border-content-primary/10 bg-surface-overlay/50 px-6 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:text-red-400" aria-hidden="true">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-content-primary">SOC Investigation Walkthrough</h3>
            <p className="text-sm text-content-muted">SSH brute force · MITRE ATT&CK · Sigma</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr]">
        <nav className="border-b border-content-primary/10 lg:border-b-0 lg:border-r" aria-label="Investigation steps">
          <ol className="flex gap-1 overflow-x-auto p-3 lg:flex-col lg:gap-0 lg:p-4">
            {socInvestigationSteps.map((step, index) => {
              const isActive = step.id === activeStep;
              const isComplete = index < stepIndex;
              return (
                <li key={step.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActiveStep(step.id)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors lg:px-4 lg:py-3 ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-content-secondary hover:bg-surface-overlay hover:text-content-primary'
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isComplete
                          ? 'bg-accent text-slate-900'
                          : isActive
                            ? 'border-2 border-accent text-accent'
                            : 'border border-content-primary/20 text-content-muted'
                      }`}
                      aria-hidden="true"
                    >
                      {isComplete ? '✓' : index + 1}
                    </span>
                    <span className="hidden sm:inline lg:inline">{step.title}</span>
                    <span className="sm:hidden lg:hidden">{index + 1}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="p-6 md:p-8">
          <h4 className="text-lg font-semibold text-content-primary">{current.title}</h4>
          <p className="mt-2 text-content-secondary">{current.summary}</p>

          {current.mitre && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-sm">
              <span className="font-mono font-medium text-red-600 dark:text-red-400">{current.mitre.id}</span>
              <span className="text-content-secondary">{current.mitre.name}</span>
            </div>
          )}

          {current.logs && (
            <div
              className="mt-5 overflow-x-auto rounded-xl border border-content-primary/10 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-300"
              role="region"
              aria-label="Sample terminal output"
            >
              {current.logs.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  <span className="select-none text-slate-600">{String(i + 1).padStart(2, ' ')} </span>
                  {line.startsWith('✓') || line.startsWith('Accepted') ? (
                    <span className="text-emerald-400">{line}</span>
                  ) : line.startsWith('Failed') || line.includes('Failed password') ? (
                    <span className="text-red-400">{line}</span>
                  ) : line.startsWith('T1') ? (
                    <span className="text-amber-400">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Outcome</p>
            <p className="mt-1 text-sm text-content-secondary">{current.outcome}</p>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              disabled={stepIndex === 0}
              onClick={() => setActiveStep(socInvestigationSteps[stepIndex - 1].id)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-content-secondary transition-colors hover:text-content-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>
            <button
              type="button"
              disabled={stepIndex === socInvestigationSteps.length - 1}
              onClick={() => setActiveStep(socInvestigationSteps[stepIndex + 1].id)}
              className="rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
