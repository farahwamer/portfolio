import { React, useState } from "react";
import "./Projects.css";
import Project from "../../components/projects/Project";
import desktopNotes from "../../assets/desktopNotes.png";
import marketing from "../../assets/marketingConsultancy.png";
import portfolio from "../../assets/portfolio.svg";
import jobApps from "../../assets/jobApps.png";
import scorpion from "../../assets/scorpion.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <Project
        src={desktopNotes}
        alt="Desktop Notes"
        title="Desktop Notes"
        text=" take notes on a desktop simulator"
        url="https://affectionate-pasteur-831865.netlify.app/"
        small={false}
      />
      <Project
        src={marketing}
        alt="Business Page"
        title="Business Page"
        text="Marketing Consultancy"
        url="https://github.com/farahwamer/wamers-marketing-consultancy"
        small={true}
      />
      <Project
        src={portfolio}
        alt="Portfolio Website"
        title="Portfolio Website"
        text="search-engine themed!"
        url="https://github.com/farahwamer/wamers-marketing-consultancy"
        small={true}
      />
      <Project
        src={jobApps}
        alt="Job application portal"
        title="Job application portal"
        text="Albatros Elite Club"
        url="https://www.albatroseliteclub.com/#/careers"
        small={false}
      />
      <Project
        src={scorpion}
        alt="Scorpion Bug Tracker"
        title="Scorpion"
        text="simple bug-tracker for personal projects"
        url="coming soon!"
        small={false}
      />
    </div>
  );
};

export default Projects;
