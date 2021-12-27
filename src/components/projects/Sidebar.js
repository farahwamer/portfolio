import React from "react";
import "./Sidebar.css";

const Sidebar = (project) => {
  return (
    <div className="sidebar-container">
      <img src={project.img} alt={project.title} className="sidebar-img" />
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="sidebar-link"
      >
        {project.link}
      </a>
    </div>
  );
};

export default Sidebar;
