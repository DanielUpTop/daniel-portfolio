import type { Project } from '../types/github';

export interface StaticProject {
  id: string;
  name: string;
  description: string;
  html_url: string | null;
  language: string;
  featured: boolean;
  highlights: string[];
  period?: string;
}

export type PortfolioProject = Project | (StaticProject & {
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: null;
  topics: string[];
  fork: false;
});

export function isStaticProject(project: PortfolioProject): project is StaticProject & {
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: null;
  topics: string[];
  fork: false;
} {
  return typeof project.id === 'string';
}
