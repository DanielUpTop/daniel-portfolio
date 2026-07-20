import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-content-primary/5 py-8" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-content-muted md:flex-row md:px-8">
        <p>
          &copy; {year} {profile.name}. Built with React &amp; Vite.
        </p>
        <p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            github.com/DanielUpTop
          </a>
        </p>
      </div>
    </footer>
  );
}
