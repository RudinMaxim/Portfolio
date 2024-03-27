"use client";
import { Loader } from "../../../../../components";
import { useProject } from "./Project.hook";
import style from "./Project.module.scss";
import { ProjectList, Search } from "./components";

export function Project() {
  const {
    projects,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    error,
    isLoading,
  } = useProject();

  const projectsToDisplay = filteredProjects || projects;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={style.error}>
        <h2>Ошибка при загрузке проектов</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className={style.Project}>
      <h1 className={style.title}>Проекты</h1>

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {projectsToDisplay && projectsToDisplay.length > 0 && (
        <ProjectList projects={projectsToDisplay} />
      )}

      {(!projectsToDisplay || projectsToDisplay.length === 0) && (
        <div className={style.empty}>
          <h2>Нет проектов для отображения</h2>
          <p>
            Возможно, вы еще не добавили проекты или ваш поисковый запрос не
            совпадает ни с одним проектом.
          </p>
        </div>
      )}
    </section>
  );
}
