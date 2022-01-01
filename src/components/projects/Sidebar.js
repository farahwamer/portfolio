import React from "react";
import "./Sidebar.css";
import { BsGithub } from "react-icons/bs";
// import { AiTwotoneCloseCircle } from "react-icons/ai";
import close from "../../assets/close.svg";

const Sidebar = (project) => {
  var isSourceCode = project.sourceCode ? true : false;
  console.log(isSourceCode);
  return (
    <div className="sidebar-container">
      <img src={project.img} alt={project.title} className="sidebar-img" />
      {/* close button */}
      <i className="sidebar-close" onClick={() => project.close()}>
        <img src={close} alt="close button" />
      </i>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="sidebar-link"
      >
        {project.link}
      </a>
      <section className="sidebar-top-row">
        <h1>{project.title}</h1>

        {isSourceCode ? (
          <a
            href={project.sourceCode}
            className="sidebar-btn-link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="sidebar-btn">
              <BsGithub />
              <p>Source code</p>
            </button>
          </a>
        ) : (
          <button className="sidebar-btn" disabled>
            <BsGithub />
            <p>Source code</p>
          </button>
        )}
      </section>
      <p className="description">{project.description}</p>
      <div className="sidebar-stack-container">
        {project.stack.map((elem) => {
          return (
            <img
              src={elem}
              className="stack-img"
              alt="programming languages used"
            />
          );
        })}
      </div>
      {/* <hr className="sidebar-divider"></hr>
      <p className="sidebar-divider-header">Related Images</p>
      <div className="related-img-container">
        {project.relatedImages.map((image) => {
          return <img src={image} alt="related" className="related-img" />;
        })}
      </div> */}
    </div>
  );
};

export default Sidebar;
