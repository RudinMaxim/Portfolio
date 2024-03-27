"use client";
import { useProject } from "./Project.hook";
import style from "./Project.module.scss";
import { ProjectList } from "./components";

export function Project() {
  const props = useProject();

  return (
    <section className={style.Project}>
      <h1 style={{ textAlign: "center", fontSize: "3.5rem" }}>Project</h1>
      <ProjectList projects={props.projects} />
    </section>
  );
}
