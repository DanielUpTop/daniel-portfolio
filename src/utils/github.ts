import type { GitHubRepo, Project } from '../types/github';
import { GITHUB_USERNAME, projectHighlights } from '../data/profile';

const GITHUB_API = 'https://api.github.com';

export async function fetchGitHubUser() {
  const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
  if (!res.ok) throw new Error('Failed to fetch GitHub profile');
  return res.json();
}

export async function fetchGitHubRepos(): Promise<Project[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`
  );
  if (!res.ok) throw new Error('Failed to fetch repositories');

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => {
      const meta = projectHighlights[repo.name];
      return {
        ...repo,
        description: meta?.description ?? repo.description,
        featured: meta?.featured ?? false,
        highlights: meta?.highlights ?? (repo.language ? [repo.language] : []),
        caseStudy: meta?.caseStudy,
        hideFromGrid: meta?.hideFromGrid,
        period: meta?.period,
      };
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
}

export function formatRelativeDate(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Updated today';
  if (diffDays === 1) return 'Updated yesterday';
  if (diffDays < 30) return `Updated ${diffDays} days ago`;
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Updated ${months} month${months > 1 ? 's' : ''} ago`;
  }
  return `Updated ${date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}`;
}
