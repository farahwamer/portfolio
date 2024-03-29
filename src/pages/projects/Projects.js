import { React, useState } from "react";
import "./Projects.css";
import Project from "../../components/projects/Project";
import Sidebar from "../../components/projects/Sidebar";

import { projectList } from "../../data/projectInfo";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState({});
  return (
    <div className="projects-page-container">
      <div className="projects-container">
        {projectList.map((project) => {
          return (
            <Project
              src={project.src}
              alt={project.alt}
              title={project.title}
              text={project.text}
              url={project.url}
              description={project.description}
              small={project.small}
              stack={project.stack}
              openFunc={setIsOpen}
              relatedImages={project.relatedImages}
              setActiveProject={setActiveProject}
              sourceCode={project.sourceCode}
            />
          );
        })}
      </div>
      {isOpen ? (
        <Sidebar
          img={activeProject.img}
          title={activeProject.title}
          link={activeProject.link}
          description={activeProject.description}
          stack={activeProject.stack}
          close={setIsOpen}
          relatedImages={activeProject.relatedImages}
          sourceCode={activeProject.sourceCode}
        />
      ) : null}
    </div>
  );
};

export default Projects;
