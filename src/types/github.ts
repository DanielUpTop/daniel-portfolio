export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
}

export interface Project extends GitHubRepo {
  featured?: boolean;
  highlights?: string[];
}
