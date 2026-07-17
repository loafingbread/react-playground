import React from "react";
import styles from "./WorkSection.module.css";

export type ProjectData = {
  title: string;
  description: string;
  image: string;
};

export type WorkSectionProps = {
  title: string;
  projects: ProjectData[];
};

function WorkSection(props: WorkSectionProps) {
  return (
    <section className={styles.workSection}>
      <h2 className={styles.workSectionTitle}>{props.title}</h2>
      <div className={styles.projectsContainer}>
        {props.projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
}

function Project(props: ProjectData) {
  return (
    <article className={styles.project}>
      <img className={styles.projectImage} src={props.image} alt="" />
      <div className={styles.projectTextContainer}>
        <h6 className={styles.projectTitle}>{props.title}</h6>
        <p className={styles.projectDescription}>{props.description}</p>
      </div>
    </article>
  );
}

export default WorkSection;
