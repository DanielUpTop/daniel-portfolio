export function AnimatedGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.2]" />
      <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px] motion-safe:animate-float" />
      <div
        className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-warm/10 blur-[100px] motion-safe:animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
}
