import PropTypes from "prop-types";
import React from "react";
import { homeProjectHref } from "../../../data/portfolioRoutes";
import assets from "../../../data/caseStudyAssets.json";
import "../ResumeLink.css";

export default function BackToExperience({ projectId }) {
  return (
    <a className="resume-link case-back-link" href={homeProjectHref(projectId)}>
      <img src={assets.backArrow} width="24" height="17.38" alt="" />
      Go Back<span className="visually-hidden"> to My Experience</span>
    </a>
  );
}

BackToExperience.propTypes = {
  projectId: PropTypes.string.isRequired,
};
