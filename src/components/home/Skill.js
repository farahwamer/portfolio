import React from "react";
import "./Skill.css";
const Skill = (props) => {
  return (
    <div className="skill">
      <img src={props.img} alt={`${props.name} logo`} />
    </div>
  );
};

export default Skill;
