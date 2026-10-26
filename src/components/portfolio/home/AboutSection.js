import React from "react";
import farahPortrait from "../../../assets/farah-portrait.svg";
import Artwork from "../Artwork";
import SocialLinks from "../SocialLinks";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section portfolio-container portfolio-section"
      aria-labelledby="about-heading"
    >
      <div className="portrait-wrap">
        <img
          className="about-portrait"
          src={farahPortrait}
          alt="Illustration of Farah in a hand-drawn floral frame"
          width="556"
          height="615"
        />
        <Artwork name="aboutLowerStar" className="about-lower-star" />
      </div>
      <div className="about-copy">
        <p className="section-eyebrow">
          Oh...where are my manners, I suppose I should tell you a little
        </p>
        <h2 id="about-heading" className="portfolio-display">
          About Me
        </h2>
        {/* <Artwork name="aboutMarks" className="about-marks" /> */}
        <Artwork name="aboutStar" className="about-star" />
        {/* <Artwork name="aboutSmallStar" className="about-small-star" /> */}
        <div className="about-paragraphs">
          <p>
            I'm a full-stack software developer and I{" "}
            <strong>love making things!</strong> Whether that's through code,
            arts and crafts, or an overly ambitious recipe I find online.
          </p>
          <p>
            When I’m not coding I can be found watching a movie (a bad
            tomatometer score has never phased me), playing
            volleyball/badminton, or doodling!
          </p>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
