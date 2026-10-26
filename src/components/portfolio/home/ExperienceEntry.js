import PropTypes from "prop-types";
import React from "react";
import Reveal from "../Reveal";

export default function ExperienceEntry({
  title,
  dates,
  children,
  className = "",
}) {
  return (
    <Reveal as="article" className={`experience-entry ${className}`}>
      <div className="experience-heading">
        <h3>{title}</h3>
        <p className="experience-dates">{dates}</p>
      </div>
      {children}
    </Reveal>
  );
}

ExperienceEntry.propTypes = {
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
