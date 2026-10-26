import React from "react";
import "./ResumeLink.css";
import assets from "./assets.json";
import { resume } from "../../data/portfolioLinks";

export default function ResumeLink() {
  return (
    <a className="resume-link" href={resume} download>
      <img src={assets.resumeDownloadIcon} alt="" width="20" height="20" />
      Grab Full Resume
    </a>
  );
}
