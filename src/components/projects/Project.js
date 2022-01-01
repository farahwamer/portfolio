import React from "react";
import "./Project.css";

// src title text url

const Project = (projectInfo) => {
  return (
    <figure
      className="project-container"
      onClick={() => {
        projectInfo.openFunc(true);
        projectInfo.setActiveProject({
          img: projectInfo.src,
          title: projectInfo.title,
          link: projectInfo.url,
          description: projectInfo.description,
          stack: projectInfo.stack,
          relatedImages: projectInfo.relatedImages,
          sourceCode: projectInfo.sourceCode,
        });
      }}
    >
      <img
        src={projectInfo.src}
        alt={projectInfo.title}
        className="project-img"
      />
      <figcaption className="project-caption-container">
        <a
          href={projectInfo.url}
          rel="noreferrer"
          target="_blank"
          className="project-tag"
          id={projectInfo.small ? "small" : null}
        >
          <b>{projectInfo.title}: </b>
          {projectInfo.text}
        </a>

        <a
          href={projectInfo.url}
          className="project-url"
          target="_blank"
          rel="noreferrer"
          id={projectInfo.small ? "small" : null}
        >
          {projectInfo.url}{" "}
        </a>
      </figcaption>
    </figure>
  );
};

export default Project;
