import React from "react";
import Artwork from "../Artwork";
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
          <h1 id="hero-name">
            <span>Farah</span>
            <span>AMER</span>
          </h1>
          <Artwork name="heroStar" className="hero-doodle hero-star" />
          <Artwork
            name="heroAsterisk"
            className="hero-doodle hero-asterisk"
          />
          <Artwork name="heroSpark" className="hero-doodle hero-spark" />
          <Artwork name="heroTick" className="hero-doodle hero-tick" />
        </div>
        <p className="hero-role">
          Senior Full-Stack Software Developer
          <br />
          <span>Specializing in Applied AI</span>
        </p>
        <nav className="hero-links" aria-label="Social and resume links">
          {socials.map((s) => (
            <a key={s.label} href={s.href}>
              {s.label}
            </a>
          ))}
          <a href={resume}>Resume</a>
        </nav>
      </div>
    </section>
  );
}
