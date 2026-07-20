import { useEffect, useState } from 'react';
import type { Project } from '../types/github';
import { fetchGitHubRepos } from '../utils/github';

interface UseGitHubReposResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export function useGitHubRepos(): UseGitHubReposResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const repos = await fetchGitHubRepos();
        if (!cancelled) {
          setProjects(repos);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError('Unable to load projects from GitHub. Please try again later.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, error };
}
