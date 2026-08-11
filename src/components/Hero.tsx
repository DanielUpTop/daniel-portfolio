import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { AnimatedGrid } from './AnimatedGrid';
import { StatsBar } from './StatsBar';
import { TerminalWindow } from './TerminalWindow';

function ArrowDownIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % profile.roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <AnimatedGrid />

      <div className="section-container relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent motion-safe:animate-fade-in"
              role="status"
            >
              <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
              {profile.availability}
            </p>

            <h1
              id="hero-heading"
              className="font-display text-4xl font-semibold leading-tight tracking-tight text-content-primary motion-safe:animate-fade-up sm:text-5xl md:text-6xl"
              style={{ animationDelay: '0.1s' }}
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-accent via-teal-400 to-warm bg-clip-text text-transparent">
                {profile.name.split(' ')[0]}
              </span>
            </h1>

            <p
              className="mt-2 font-display text-xl text-content-secondary motion-safe:animate-fade-up md:text-2xl"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-accent">{displayText}</span>
              <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent align-middle" />
            </p>

            <div
              className="mt-6 motion-safe:animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              <div className="profile-photo-frame inline-block">
                <img
                  src="/daniel-profile.png"
                  alt="Daniel Ahenkorah — Software Engineer and Full-Stack Developer"
                  className="profile-photo"
                  width={224}
                  height={280}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <p
              className="mt-6 text-lg leading-relaxed text-content-secondary motion-safe:animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              {profile.tagline}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-4 motion-safe:animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="#projects" className="btn-primary group relative">
                View my work
                <ArrowDownIcon />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
              <a href="#experience" className="btn-secondary hidden sm:inline-flex">
                My experience
              </a>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-content-muted">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </p>

            <StatsBar />
          </div>

          <TerminalWindow />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-content-muted transition-colors hover:text-accent motion-safe:animate-bounce"
        aria-label="Scroll to about section"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
