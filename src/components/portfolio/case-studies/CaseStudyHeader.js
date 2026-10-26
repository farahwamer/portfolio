import React from "react";
import Artwork from "../Artwork";
import DrawnArtwork from "../DrawnArtwork";
import Entrance from "../Entrance";
import PaperGrid from "../PaperGrid";
import BackToExperience from "./BackToExperience";

const decorations = {
  "commercial-underwriting": [
    ["underwritingHeroFlower", "case-doodle-right"],
    ["underwritingHeroSpark", "case-doodle-left-top"],
    ["underwritingHeroLargeSpark", "case-doodle-left"],
  ],
  "wealth-advisor-insights": [
    ["wealthHeroStar", "case-doodle-right-top"],
    ["wealthHeroSmallStar", "case-doodle-left"],
    ["wealthHeroSpark", "case-doodle-right-low"],
    ["wealthHeroTwinSpark", "case-doodle-right-twin"],
  ],
  "meeting-intelligence": [
    ["meetingHeroFlower", "case-doodle-left-top"],
    ["meetingHeroRightStar", "case-doodle-right"],
    ["meetingHeroLeftStar", "case-doodle-left"],
  ],
  "enterprise-data-platform": [
    ["enterpriseHeroOrangeFlower", "case-doodle-left"],
    ["enterpriseHeroPinkFlower", "case-doodle-right-top"],
  ],
  apex: [
    ["apexHeroOrangeFlower", "case-doodle-right-top"],
    ["apexHeroStar", "case-doodle-left"],
  ],
};

export default function CaseStudyHeader({ study, project }) {
  return (
    <header className={`case-study-hero case-study-hero-${study.id}`}>
      <PaperGrid fadeArtwork="caseGridFade" />
      <div className="portfolio-container">
        <div className="case-study-heading">
          <Entrance as="h1" id="case-study-title" tabIndex="-1">
            {study.title}
          </Entrance>
          <Entrance as="p" stage="description" className="case-study-description">
            {study.description}
          </Entrance>
          <Entrance
            stage="details"
            className="case-study-stack"
            style={{ width: project.width * 1.2 }}
            role="img"
            aria-label={project.technologies}
          >
            <Artwork name={project.stack} />
          </Entrance>
          {decorations[study.id].map(([name, className]) => (
            <DrawnArtwork
              key={name}
              name={name}
              className={`case-doodle ${className}`}
            />
          ))}
        </div>
        <Entrance stage="details" className="case-header-navigation">
          <BackToExperience projectId={project.id} />
        </Entrance>
      </div>
    </header>
  );
}
