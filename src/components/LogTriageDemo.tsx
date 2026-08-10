import { useState } from 'react';
import { logTriageScenario } from '../data/features';
import { useInView } from '../hooks/useInView';

type Phase = 'triage' | 'technique' | 'complete';

export function LogTriageDemo() {
  const [phase, setPhase] = useState<Phase>('triage');
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>();

  const suspiciousLogs = logTriageScenario.logs.filter((l) => l.suspicious);
  const allFlagged = suspiciousLogs.every((l) => flagged.has(l.id));

  function toggleFlag(id: string) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function submitTriage() {
    if (allFlagged && flagged.size === suspiciousLogs.length) {
      setPhase('technique');
      setFeedback(null);
    } else {
      setFeedback('Flag all suspicious entries — look for repeated failed logins from the same source IP.');
    }
  }

  function submitTechnique() {
    const technique = logTriageScenario.techniques.find((t) => t.id === selectedTechnique);
    if (technique?.correct) {
      setPhase('complete');
      setFeedback(null);
    } else {
      setFeedback('Not quite — consider what happens before the successful login.');
    }
  }

  function reset() {
    setPhase('triage');
    setFlagged(new Set());
    setSelectedTechnique(null);
    setFeedback(null);
  }

  return (
    <div
      ref={ref}
      className={`glass-card overflow-hidden ${inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}
    >
      <div className="border-b border-content-primary/10 bg-surface-overlay/50 px-6 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-content-primary">{logTriageScenario.title}</h3>
            <p className="text-sm text-content-muted">Interactive · read-only · sample data</p>
          </div>
          {phase !== 'triage' && (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-content-primary/15 px-3 py-1.5 text-xs font-medium text-content-muted transition-colors hover:text-content-primary"
            >
              Reset demo
            </button>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-sm text-content-secondary">{logTriageScenario.description}</p>

        {/* Progress indicator */}
        <div className="mt-4 flex gap-2" aria-label="Demo progress">
          {(['triage', 'technique', 'complete'] as Phase[]).map((p, i) => (
            <div
              key={p}
              className={`h-1 flex-1 rounded-full ${
                phase === p
                  ? 'bg-accent'
                  : ['triage', 'technique', 'complete'].indexOf(phase) > i
                    ? 'bg-accent/40'
                    : 'bg-content-primary/10'
              }`}
            />
          ))}
        </div>

        {/* Log viewer */}
        <div
          className="mt-5 overflow-x-auto rounded-xl border border-content-primary/10 bg-slate-950 p-4 font-mono text-xs"
          role="log"
          aria-label="Sample authentication logs"
        >
          {logTriageScenario.logs.map((entry) => {
            const isFlagged = flagged.has(entry.id);
            const showHighlight = phase === 'complete' && entry.suspicious;

            return (
              <div
                key={entry.id}
                className={`flex items-start gap-2 py-0.5 ${
                  showHighlight ? 'bg-red-500/10 -mx-2 px-2 rounded' : ''
                }`}
              >
                {phase === 'triage' ? (
                  <button
                    type="button"
                    onClick={() => toggleFlag(entry.id)}
                    aria-pressed={isFlagged}
                    aria-label={`${isFlagged ? 'Unflag' : 'Flag'} log entry at ${entry.timestamp}`}
                    className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-bold transition-colors ${
                      isFlagged
                        ? 'border-red-500/50 bg-red-500/20 text-red-400'
                        : 'border-slate-700 text-slate-600 hover:border-red-500/30 hover:text-red-400'
                    }`}
                  >
                    {isFlagged ? '!' : '·'}
                  </button>
                ) : (
                  <span className="mt-0.5 w-6 shrink-0 text-center text-slate-600">
                    {entry.suspicious ? '!' : ' '}
                  </span>
                )}
                <span className="shrink-0 text-slate-600">{entry.timestamp}</span>
                <span
                  className={
                    entry.message.includes('Failed')
                      ? 'text-red-400'
                      : entry.message.includes('Accepted password')
                        ? 'text-amber-400'
                        : entry.message.includes('Accepted')
                          ? 'text-emerald-400'
                          : 'text-slate-300'
                  }
                >
                  {entry.message}
                </span>
              </div>
            );
          })}
        </div>

        {phase === 'triage' && (
          <div className="mt-5">
            <button type="button" onClick={submitTriage} className="btn-primary text-sm">
              Submit triage ({flagged.size} flagged)
            </button>
          </div>
        )}

        {phase === 'technique' && (
          <fieldset className="mt-5">
            <legend className="text-sm font-medium text-content-primary">
              Which MITRE ATT&CK technique best describes the primary attack?
            </legend>
            <div className="mt-3 space-y-2">
              {logTriageScenario.techniques.map((tech) => (
                <label
                  key={tech.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors ${
                    selectedTechnique === tech.id
                      ? 'border-accent bg-accent/10'
                      : 'border-content-primary/10 hover:border-accent/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="technique"
                    value={tech.id}
                    checked={selectedTechnique === tech.id}
                    onChange={() => setSelectedTechnique(tech.id)}
                    className="accent-accent"
                  />
                  <span className="font-mono text-sm text-accent">{tech.id}</span>
                  <span className="text-sm text-content-secondary">{tech.name}</span>
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={submitTechnique}
              disabled={!selectedTechnique}
              className="btn-primary mt-4 text-sm disabled:opacity-50"
            >
              Confirm technique
            </button>
          </fieldset>
        )}

        {phase === 'complete' && (
          <div className="mt-5 space-y-4 motion-safe:animate-fade-in">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Correct — T1110.001 Brute Force: Password Guessing
              </p>
              <p className="mt-1 text-sm text-content-secondary">{logTriageScenario.explanation}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-content-muted">
                Sigma detection rule
              </p>
              <pre className="mt-2 overflow-x-auto rounded-xl border border-content-primary/10 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-300">
                {logTriageScenario.sigmaRule}
              </pre>
            </div>
          </div>
        )}

        {feedback && (
          <p className="mt-4 text-sm text-warm-muted dark:text-warm" role="alert">
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}
