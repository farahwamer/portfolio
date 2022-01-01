import { React, useState } from "react";
import "./Projects.css";
import Project from "../../components/projects/Project";
// import desktopNotes from "../../assets/desktopNotes.png";
// import marketing from "../../assets/marketingConsultancy.png";
// import portfolio from "../../assets/portfolio.svg";
// import jobApps from "../../assets/jobApps.png";
// import scorpion from "../../assets/scorpion.png";
import Sidebar from "../../components/projects/Sidebar";

import { projectList } from "../../assets/projectInfo";

// const projectList = [
//   {
//     src: desktopNotes,
//     alt: "Desktop Notes",
//     title: "Desktop Notes",
//     text: " take notes on a desktop simulator",
//     url: "https://affectionate-pasteur-831865.netlify.app/",
//     small: false,
//   },
//   {
//     src: marketing,
//     alt: "Business Page",
//     title: "Business Page",
//     text: "marketing consultancy",
//     url: "https://github.com/farahwamer/wamers-marketing-consultancy",
//     small: true,
//   },
//   {
//     src: portfolio,
//     alt: "Portfolio Website",
//     title: "Portfolio Website",
//     text: "search-engine-themed!",
//     url: "https://www.farahwamer.com",
//     small: true,
//   },
//   {
//     src: jobApps,
//     alt: "Job application portal",
//     title: "Job application portal",
//     text: "Albatros Elite Club",
//     url: "https://www.albatroseliteclub.com/#/careers",
//     small: false,
//   },
//   {
//     src: scorpion,
//     alt: "Scorpion Bug Tracker",
//     title: "Scorpion",
//     text: "simple bug-tracker for personal projects",
//     url: "coming soon!",
//     small: false,
//   },
// ];

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
