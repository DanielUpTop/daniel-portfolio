import type { PortfolioProject } from '../types/project';
import { isStaticProject } from '../types/project';
import { formatRelativeDate } from '../utils/github';

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const description =
    project.description ?? 'No description provided for this project.';
  const hasLink = Boolean(project.html_url);
  const dateLabel = isStaticProject(project)
    ? project.period ?? ''
    : project.updated_at
      ? formatRelativeDate(project.updated_at)
      : '';

  return (
    <article
      className="group glass-card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 motion-safe:animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
            aria-hidden="true"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <div>
            <h3
              id={`project-${project.id}-title`}
              className="font-semibold text-content-primary group-hover:text-accent"
            >
              {project.name}
            </h3>
            {project.featured && (
              <span className="mt-0.5 inline-block text-xs font-medium text-warm">Featured</span>
            )}
          </div>
        </div>

        {hasLink && (
          <a
            href={project.html_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg p-2 text-content-muted transition-colors hover:bg-content-primary/5 hover:text-accent"
            aria-label={`View ${project.name} on GitHub (opens in new tab)`}
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-content-secondary">{description}</p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-surface-overlay px-2.5 py-1 text-xs font-medium text-content-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-auto flex items-center justify-between border-t border-content-primary/5 pt-4 text-xs text-content-muted">
        <div className="flex items-center gap-4">
          {project.language && (
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              {project.language}
            </span>
          )}
          {project.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <StarIcon />
              {project.stargazers_count}
            </span>
          )}
        </div>
        {dateLabel && (
          <time dateTime={isStaticProject(project) ? undefined : project.updated_at}>
            {dateLabel}
          </time>
        )}
      </footer>
    </article>
  );
}
