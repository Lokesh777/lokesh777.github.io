import React, { useState } from 'react';
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCarditem";
import { ProjectDetail } from "../components/ProjectDetail";
import styles from "../styles/Project.module.css";

export function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.projectsSectionCont} id="projects">
      <h1 className={styles.headingH1}>RECENT PROJECTS</h1>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.label}
            label={project.label}
            img={project.img}
            git={project.git}
            link={project.link}
            accent={project.accent}
            about={project.about}
            stacks={project.stacks}
            company={project.company}
            companyLabel={project.companyLabel}
            onDetails={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectDetail project={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
}
