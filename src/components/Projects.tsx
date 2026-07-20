import { useMemo, useState } from 'react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { profile, staticProjects } from '../data/profile';
import { ProjectCard } from './ProjectCard';
import type { PortfolioProject } from '../types/project';

function ProjectSkeleton() {
  return (
    <div className="glass-card animate-pulse p-6" aria-hidden="true">
      <div className="mb-4 flex gap-3">
        <div className="h-10 w-10 rounded-lg bg-content-primary/10" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-2/3 rounded bg-content-primary/10" />
          <div className="h-3 w-1/3 rounded bg-content-primary/5" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-content-primary/5" />
        <div className="h-3 w-4/5 rounded bg-content-primary/5" />
      </div>
    </div>
  );
}

function toPortfolioProject(
  project: (typeof staticProjects)[number]
): PortfolioProject {
  return {
    ...project,
    stargazers_count: 0,
    forks_count: 0,
    updated_at: project.period ?? '',
    homepage: null,
    topics: project.highlights,
    fork: false,
  };
}

export function Projects() {
  const { projects: githubProjects, loading, error } = useGitHubRepos();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const projects = useMemo<PortfolioProject[]>(() => {
    const staticItems = staticProjects.map(toPortfolioProject);
    const githubNames = new Set(githubProjects.map((p) => p.name.toLowerCase()));
    const uniqueStatic = staticItems.filter(
      (p) => !githubNames.has(p.name.toLowerCase())
    );
    return [...githubProjects, ...uniqueStatic].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [githubProjects]);

  const filtered = useMemo(() => {
    if (filter === 'featured') return projects.filter((p) => p.featured);
    return projects;
  }, [projects, filter]);

  const languages = useMemo(() => {
    const langs = new Set(projects.map((p) => p.language).filter(Boolean) as string[]);
    return Array.from(langs);
  }, [projects]);

  return (
    <section id="projects" className="section-container" aria-labelledby="projects-heading">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-label">Portfolio</span>
          <h2 id="projects-heading" className="section-title">
            Technical projects
          </h2>
          <p className="mt-3 max-w-xl text-content-secondary">
            A mix of university work and open-source projects from my{' '}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              GitHub profile
            </a>
            .
          </p>
        </div>

        <div
          className="flex rounded-xl border border-content-primary/10 p-1"
          role="group"
          aria-label="Filter projects"
        >
          {(['all', 'featured'] as const).map((option) => (
            <button
              key={option}
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                filter === option
                  ? 'bg-accent text-slate-900'
                  : 'text-content-muted hover:text-content-primary'
              }`}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {languages.length > 0 && (
        <p className="mb-8 text-sm text-content-muted">
          Languages: {languages.join(' · ')}
        </p>
      )}

      {error && (
        <div
          className="mb-8 rounded-xl border border-warm/30 bg-warm/10 px-4 py-3 text-warm-muted dark:text-warm"
          role="alert"
        >
          {error}
        </div>
      )}

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
        aria-busy={loading}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <ProjectSkeleton key={i} />)
          : filtered.length > 0
            ? filtered.map((project, index) => (
                <ProjectCard key={String(project.id)} project={project} index={index} />
              ))
            : (
                <p className="col-span-full text-center text-content-secondary">
                  No projects match this filter.
                </p>
              )}
      </div>
    </section>
  );
}
