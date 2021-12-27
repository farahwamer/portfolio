import React from "react";
import "./Project.css";

// src title text url

const Project = (projectInfo) => {
  return (
    <figure className="project-container">
      <img
        src={projectInfo.src}
        alt={projectInfo.title}
        className="project-img"
      />
      <figcaption className="project-caption-container">
        {/* <div className="truncation-container"> */}
        <p className="project-tag" id={projectInfo.small ? "small" : null}>
          <b>{projectInfo.title}: </b>
          {projectInfo.text}
        </p>

        <a
          href={projectInfo.url}
          className="project-url"
          target="_blank"
          id={projectInfo.small ? "small" : null}
        >
          {projectInfo.url}{" "}
        </a>
        {/* </div> */}
      </figcaption>
    </figure>
  );
};

export default Project;
