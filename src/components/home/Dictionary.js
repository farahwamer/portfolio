import { React, useState } from "react";
import { AiFillSound } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import "./Dictionary.css";
import { skills } from "../../data/skills";
import Skill from "./Skill";

const Dictionary = () => {
  const [moreShown, setMoreShown] = useState(false);
  let pronounciationAudio = new Audio("/assets/pronounciation.mp3");

  const playSound = () => pronounciationAudio.play();

  if (moreShown) {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }

  return (
    <div className="dictionary-container">
      <h1>Dictionary</h1>
      <section className="dictionary-row-one">
        <div className="voice-button" onClick={playSound}>
          <AiFillSound />
        </div>

        <h2>FARAH AMER</h2>
      </section>
      <p id="pronounciation">/ , fAIR-uh AY-muhr /</p>
      <p className="dictionary-header">
        <i>noun</i>
      </p>
      <ol className="dictionary-ol">
        <li>A Software Developer with a flair for design.</li>
        <li>
          An undergraduate student studying Computer Science, specializing in
          Software Design.{" "}
        </li>
      </ol>
      <section className="dictionary-row-two">
        <p>Synonyms:</p>
        <div className="synonyms-container">
          <div className="synonym">Quick Learner</div>
          <div className="synonym">Creative</div>
          <div className="synonym">Team Player</div>
          <div className="synonym">Diligent</div>
        </div>
      </section>
      {/* Collapsable portion */}
      <div
        className="skills-container"
        style={
          moreShown
            ? { maxHeight: "500px", opacity: "1" }
            : { maxHeight: "0", opacity: "0" }
        }
        id="skills-container"
      >
        <p className="dictionary-header">Skills</p>
        <div className="skills-icons-container">
          {skills.map((skill) => {
            return <Skill name={skill.name} img={skill.img} />;
          })}
        </div>
      </div>
      <div className="dictionary-barrier">
        <hr />
        <button className="show-btn" onClick={() => setMoreShown(!moreShown)}>
          {moreShown ? (
            <i>
              <BsChevronUp />{" "}
            </i>
          ) : (
            <i>
              {" "}
              <BsChevronDown />
            </i>
          )}
          Show {moreShown ? "less" : "more"}
        </button>
        <hr />
      </div>
    </div>
  );
};

export default Dictionary;
