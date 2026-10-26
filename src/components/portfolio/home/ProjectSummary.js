import React from "react";
import "./ProjectSummary.css";
import Artwork from "../Artwork";
import assets from "../assets.json";

export default function ProjectSummary({ project }) {
  return (
    <article className="project-summary" id={project.id}>
      <h4>
        {project.title}
        <img
          className="project-arrow"
          src={assets.projectExternalArrow}
          alt=""
          width="16"
          height="16"
        />
      </h4>
      <p>{project.description}</p>
      <div
        className="technology-row"
        style={{ width: project.width }}
        role="img"
        aria-label={project.technologies}
      >
        <Artwork name={project.stack} />
      </div>
    </article>
  );
}
