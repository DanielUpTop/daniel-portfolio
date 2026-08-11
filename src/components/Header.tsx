import { useEffect, useState } from 'react';
import { navLinks } from '../data/profile';
import { ThemeToggle } from './ThemeToggle';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = (href: string) => {
    const id = href.replace('#', '');
    const isActive = activeSection === id;
    return `relative text-sm font-medium transition-colors ${
      isActive ? 'text-accent' : 'text-content-secondary hover:text-accent'
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-content-primary/10 bg-surface/90 shadow-sm shadow-accent/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="font-display text-lg font-semibold text-content-primary transition-colors hover:text-accent"
          aria-label="Daniel Ahenkorah — back to top"
        >
          DA<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={linkClass(href)}>
                {label}
                {activeSection === href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent" aria-hidden="true" />
                )}
              </a>
            ))}
            <a
              href="https://github.com/DanielUpTop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-content-secondary transition-colors hover:text-accent"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-content-primary/10 text-content-primary md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-content-primary/10 bg-surface/95 px-6 py-6 backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block py-2 text-lg font-medium transition-colors hover:text-accent ${
                    activeSection === href.replace('#', '') ? 'text-accent' : 'text-content-primary'
                  }`}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/DanielUpTop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-lg font-medium text-content-primary hover:text-accent"
                onClick={closeMenu}
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
