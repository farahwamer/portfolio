import { React, useState } from "react";
import "./Accordion.css";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Accordion = () => {
  const openStyle = { opacity: "1", maxHeight: "300px" };
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div className="accordion-container">
      <h1>People also ask</h1>
      <div
        className="question-container"
        id="question-container-1"
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <section className="question-row">
          <p className="question">Why did Farah choose to work in tech?</p>
          {isOpen1 ? <FiChevronDown /> : <FiChevronUp />}
        </section>
        <div
          className="answer-container"
          style={isOpen1 ? openStyle : { maxHeight: "0", opacity: "0" }}
        >
          <p className="answer">
            I chose to work in tech because of the sheer vastness of this
            wonderful field, I like that no matter how much you learn, there
            will always be more to achieve and create. I also love that software
            development, especially, allows me to tap into my creative skills,
            design-wise, as well as my analytical skills. In addition, I believe
            that there is nothing more rewarding than the feeling of building
            something from the ground up!
          </p>
        </div>
      </div>
      <div className="question-container" onClick={() => setIsOpen2(!isOpen2)}>
        <section className="question-row">
          <p className="question">
            What does Farah like to do outside of work?
          </p>
          {isOpen2 ? <FiChevronDown /> : <FiChevronUp />}
        </section>
        <div
          className="answer-container"
          style={isOpen2 ? openStyle : { maxHeight: "0", opacity: "0" }}
        >
          <p className="answer">
            When I’m not coding, I can be found doodling on my iPad, attempting
            to cook, playing boardgames, or going through my Netflix watch list
            at an impressive (but alarming) rate. Some hobbies I would like to
            explore further in the future are woodworking and rock climbing!
          </p>
        </div>
      </div>
      <div className="question-container" onClick={() => setIsOpen3(!isOpen3)}>
        <section className="question-row">
          <p className="question">
            What is Farah's greatest strength and greatest weakness?
          </p>
          {isOpen3 ? <FiChevronDown /> : <FiChevronUp />}
        </section>
        <div
          className="answer-container"
          style={isOpen3 ? openStyle : { maxHeight: "0", opacity: "0" }}
        >
          <p className="answer">
            I would say my greatest strength is my passion for my work. I
            genuinely like what I do, so I approach any learning opportunities I
            encounter with enthusiasm and dedication. As for my greatest
            weakness, I am known to have some trouble asking for help with my
            code, because I enjoy trying to figure out a solution. However,
            taken to an extreme, this has proven to be an inefficient way to
            solve bugs. Due to this, I have started implementing a strict
            30-minute rule, when working with others; if I can’t find a way to
            begin fixing an issue in half an hour, then I force myself to ask
            for help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
