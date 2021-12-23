import { React, useState } from "react";
import { AiFillSound } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import "./Dictionary.css";
import bash from "../../assets/bash.png";
import c from "../../assets/c.png";
import CSS from "../../assets/CSS.png";
import express from "../../assets/express.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import HTML from "../../assets/HTML.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import node from "../../assets/node.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";

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
          <div className="skill">
            <img src={HTML} alt="HTML logo" />
          </div>
          <div className="skill">
            <img src={CSS} alt="CSS logo" />
          </div>
          <div className="skill">
            <img src={javascript} alt="JavaScript logo" />
          </div>
          <div className="skill">
            <img src={react} alt="React logo" />
          </div>
          <div className="skill">
            <img src={node} alt="Node.js logo" />
          </div>
          <div className="skill">
            <img src={express} alt="Express logo" />
          </div>
          <div className="skill">
            <img src={python} alt="Python logo" />
          </div>
          <div className="skill">
            <img src={java} alt="Java logo" id="java" />
          </div>
          <div className="skill">
            <img src={c} alt="C logo" />
          </div>
          <div className="skill">
            <img src={git} alt="Git logo" />
          </div>
          <div className="skill">
            <img src={bash} alt="Bash logo" />
          </div>
          <div className="skill">
            <img src={figma} alt="Figma logo" id="figma" />
          </div>
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
