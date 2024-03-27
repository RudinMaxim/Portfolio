import { useMemo } from "react";

interface IFilterProps<T> {
  data: T[] | null;
  searchQuery: string;
  filterFn: (item: T, query: string) => boolean;
}

export const useFilter = <
  T extends {
    name?: string;
    description?: string;
    technologies?: { name?: string }[];
    libraries?: { name?: string }[];
  }
>({
  data,
  searchQuery,
  filterFn,
}: IFilterProps<T>) => {
  const filteredData = useMemo(() => {
    if (!data) return null;

    return data.filter((item) => filterFn(item, searchQuery));
  }, [data, searchQuery, filterFn]);

  return { filteredData };
};
