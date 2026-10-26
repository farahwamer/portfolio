import React from "react";
import Artwork from "../Artwork";

export default function ExperienceEntry({
  title,
  dates,
  children,
  className = "",
}) {
  return (
    <article className={`experience-entry ${className}`}>
      <div className="experience-heading">
        <h3>{title}</h3>
        <p className="experience-dates">{dates}</p>
      </div>
      {children}
    </article>
  );
}
