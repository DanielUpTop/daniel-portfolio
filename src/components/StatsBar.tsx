import { stats } from '../data/profile';

export function StatsBar() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, index) => (
        <div
          key={`${stat.value}-${index}`}
          className="glass-card group relative overflow-hidden p-4 text-center transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 motion-safe:animate-fade-up"
          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <p className={`relative font-display font-bold text-accent ${stat.label ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
            {stat.value}
          </p>
          {stat.label && (
            <p className="relative mt-1 text-xs text-content-muted">{stat.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
