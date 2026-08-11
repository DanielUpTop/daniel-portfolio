import { navLinks, profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-content-primary/10 bg-surface-raised/30 py-10 backdrop-blur-sm" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-content-primary">
              {profile.name.split(' ')[0]}<span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-sm text-content-muted">
              &copy; {year} {profile.name}. Built with React &amp; Vite.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-content-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-content-muted transition-colors hover:text-accent"
          >
            github.com/DanielUpTop
          </a>
        </div>
      </div>
    </footer>
  );
}
