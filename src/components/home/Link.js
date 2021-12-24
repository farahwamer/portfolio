import React from "react";
import "./Link.css";
import "./Link.css";

const Link = (props) => {
  return (
    <div className="link-container">
      <p className="link-url">{props.url}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="link-link"
      >
        {props.title}
      </a>
      <p className="link-text">{props.text}</p>
    </div>
  );
};

export default Link;
