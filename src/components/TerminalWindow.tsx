import { useEffect, useState } from 'react';

const lines = [
  { prompt: '$', text: 'whoami', delay: 0 },
  { prompt: '>', text: 'daniel_ahenkorah', delay: 600, className: 'text-accent' },
  { prompt: '$', text: 'cat stack.txt', delay: 1200 },
  {
    prompt: '>',
    text: 'React · Node.js · Python · Docker · MITRE ATT&CK',
    delay: 1800,
    className: 'text-warm',
  },
  { prompt: '$', text: 'echo $status', delay: 2400 },
  { prompt: '>', text: 'Open to software engineering roles ✓', delay: 3000, className: 'text-accent' },
];

export function TerminalWindow() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timers = lines.map((line, index) =>
      setTimeout(() => setVisibleCount(index + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-warm/20 blur-2xl" />
      <div className="glass-card relative w-[380px] overflow-hidden border-accent/20 shadow-2xl shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-content-primary/10 bg-surface-overlay/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-xs text-content-muted">daniel@portfolio ~</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm">
          {lines.slice(0, visibleCount).map((line, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-content-muted">{line.prompt}</span>
              <span className={line.className ?? 'text-content-secondary'}>{line.text}</span>
            </div>
          ))}
          {visibleCount < lines.length && (
            <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
          )}
        </div>
      </div>
    </div>
  );
}
