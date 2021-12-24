import React from "react";
import "./Project.css";

const Project = (props) => {
  return (
    // <div className="project-container">
    //   <img src={props.src} alt={props.alt} className="project-img" />
    //   <div className="project-tag-container">
    //     <h3 className="project-tag">
    //       <mark>{props.title}:</mark> {props.text}
    //     </h3>
    //     <a href={props.url} target="_blank" className="project-url">
    //       {props.url}
    //     </a>
    //   </div>
    // </div>

    <figure>
      <img src={props.src} alt={props.alt} className="project-img" />
      <figcaption>
        Fig.1 - Trulli, Puglia hello my name is farah sd s f d d f d hxcjashc.
        shdjasd sldj sjd isdsiud oisdisod sdhsdj o my name is farah sd s f d d f
        d hxcjashc. shdjasd sldj sjd isdsiud oisdisod sdhsdjo my name is farah
        sd s f d d f d hxcjashc. shdjasd sldj sjd isdsiud oisdisod sdhsdjo my
        name is farah sd s f d d f d hxcjashc. shdjasd sldj sjd isdsiud oisdisod
        sdhsdj
      </figcaption>
    </figure>
  );
};

export default Project;

// <figure>
//   <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
//   <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
// </figure>
