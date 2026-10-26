import React from "react";
import Artwork from "../Artwork";
import DrawnArtwork from "../DrawnArtwork";
import { socials, resume } from "../../../data/portfolioLinks";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="paper-grid" aria-hidden="true">
        <Artwork name="gridVertical" />
        <Artwork name="gridHorizontal" />
        <Artwork name="gridFade" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Equal parts creativity and code.</p>
        <div className="hero-signature">
          <div className="hero-name-entrance">
            <h1 id="hero-name">
              <span>Farah</span>
              <span>AMER</span>
            </h1>
          </div>
          <DrawnArtwork name="heroStar" className="hero-doodle hero-star" />
          <DrawnArtwork
            name="heroAsterisk"
            className="hero-doodle hero-asterisk"
          />
          <DrawnArtwork name="heroSpark" className="hero-doodle hero-spark" />
          <DrawnArtwork name="heroTick" className="hero-doodle hero-tick" />
        </div>
        <p className="hero-role">
          Senior Full-Stack Software Developer
          <br />
          <span>Specializing in Applied AI</span>
        </p>
        <nav className="hero-links" aria-label="Social and resume links">
          {socials.map((s) => (
            <a key={s.label} href={s.href}>
              <span>{s.label}</span>
            </a>
          ))}
          <a href={resume}><span>Resume</span></a>
        </nav>
      </div>
    </section>
  );
}
