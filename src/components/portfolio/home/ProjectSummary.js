import { projectType } from "../propTypes";
import React from "react";
import "./ProjectSummary.css";
import Artwork from "../Artwork";
import assets from "../assets.json";
import { caseStudyHref } from "../../../data/portfolioRoutes";

export default function ProjectSummary({ project }) {
  return (
    <article className="project-summary" id={project.id}>
      <h4>
        <a className="project-title-link" href={caseStudyHref(project.id)}>
          <span>{project.title}</span>
          <img
            className="project-arrow"
            src={assets.projectExternalArrow}
            alt=""
            width="16"
            height="16"
          />
        </a>
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

ProjectSummary.propTypes = {
  project: projectType.isRequired,
};
