import { useEffect, useState } from "react";
import { getProject } from "../../../../../lib/api/getProject";
import { useDebounce } from "../../../../../lib/hooks/useDebounce";
import { useFilter } from "../../../../../lib/hooks/useFilter";
import { TypeProject } from "../../../../api/projects/schema";

export interface IProject {
  projects: TypeProject[] | null;
  filteredProjects: TypeProject[] | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  error: Error | null;
  isLoading: boolean;
}

const filterProjectsByQuery = (
  project: TypeProject,
  query: string
): boolean => {
  return (
    project.name.toLowerCase().includes(query.toLowerCase()) ||
    (project.description &&
      project.description.toLowerCase().includes(query.toLowerCase()))
  );
};

export const useProject = (): IProject => {
  const [projects, setProjects] = useState<TypeProject[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce(searchQuery);

  const { filteredData: filteredProjects } = useFilter<TypeProject>({
    data: projects,
    searchQuery: debouncedSearch,
    filterFn: filterProjectsByQuery,
  });

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getProject();
        if (data) {
          setProjects(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    error,
    isLoading,
  };
};
