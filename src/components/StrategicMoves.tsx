import { useState } from 'react';
import { strategicMoves } from '../data/features';
import { useInView } from '../hooks/useInView';

export function StrategicMoves() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [activeMove, setActiveMove] = useState<string | null>(null);
  const { ref, inView } = useInView<HTMLDivElement>();

  function revealMove(id: string) {
    setActiveMove(id);
    setRevealed((prev) => new Set(prev).add(id));
  }

  return (
    <div ref={ref} className={`mt-10 ${inView ? 'motion-safe:animate-fade-up' : 'opacity-0'}`}>
      <div className="mb-6">
        <span className="section-label">Strategic Thinking</span>
        <h3 className="font-display text-2xl font-semibold text-content-primary">
          Strategic Moves
        </h3>
        <p className="mt-2 max-w-lg text-sm text-content-secondary">
          Real project trade-offs presented as decisions — click a move to reveal what I chose and why.
        </p>
      </div>

      <div className="space-y-4">
        {strategicMoves.map((move, index) => {
          const isRevealed = revealed.has(move.id);
          const isActive = activeMove === move.id;

          return (
            <article
              key={move.id}
              className={`glass-card overflow-hidden transition-all ${
                isActive ? 'border-accent/30 shadow-lg shadow-accent/5' : ''
              }`}
            >
              <div className="flex items-start gap-4 p-5 md:p-6">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-overlay font-display text-lg font-bold text-content-muted"
                  aria-hidden="true"
                >
                  {String.fromCharCode(9812 + (index % 6))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-content-primary">{move.context}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {(['A', 'B'] as const).map((key) => {
                      const option = key === 'A' ? move.optionA : move.optionB;
                      const isChosen = isRevealed && move.chosen === key;
                      const isRejected = isRevealed && move.chosen !== key;

                      return (
                        <button
                          key={key}
                          type="button"
                          disabled={isRevealed}
                          onClick={() => revealMove(move.id)}
                          className={`rounded-xl border p-4 text-left transition-all ${
                            isChosen
                              ? 'border-accent bg-accent/10 ring-1 ring-accent/30'
                              : isRejected
                                ? 'border-content-primary/5 bg-surface-overlay/30 opacity-50'
                                : 'border-content-primary/15 hover:border-accent/40 hover:bg-accent/5'
                          }`}
                          aria-label={`Option ${key}: ${option.label}`}
                        >
                          <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                            Move {key}
                          </span>
                          <p className="mt-1 text-sm font-medium text-content-primary">{option.label}</p>
                          <p className="mt-1 text-xs text-content-muted">{option.tradeoff}</p>
                          {isChosen && (
                            <span className="mt-2 inline-block text-xs font-semibold text-accent">
                              ✓ Chosen
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isRevealed && (
                    <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4 motion-safe:animate-fade-in">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">Reasoning</p>
                      <p className="mt-1 text-sm leading-relaxed text-content-secondary">{move.reasoning}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
