import React from "react";
import "./Project.css";

// src title text url

const Project = (projectInfo) => {
  return (
    <figure
      className="project-container"
      onClick={() => {
        projectInfo.onClick(true);
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
