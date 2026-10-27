import React from "react";
import Reveal from "../Reveal";
import Artwork from "../Artwork";
import DrawnArtwork from "../DrawnArtwork";
import SocialLinks from "../SocialLinks";
import ResumeLink from "../ResumeLink";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <footer
      className="contact-section portfolio-section"
      aria-labelledby="contact-heading"
    >
      <div className="footer-grid" aria-hidden="true">
        <DrawnArtwork name="gridVertical" drawOnVisible />
        <DrawnArtwork name="gridHorizontal" drawOnVisible />
        <Artwork name="footerFade" />
      </div>
      <Reveal className="portfolio-container contact-content">
        <p className="section-eyebrow">
          Now that we’ve gotten to know each other
        </p>
        <h2 id="contact-heading" className="portfolio-display">
          Drop me a line
        </h2>
        <SocialLinks large />
        <ResumeLink />
        <DrawnArtwork name="contactArrow" className="contact-arrow" drawOnVisible />
        <DrawnArtwork name="contactFlower" className="contact-flower" drawOnVisible />
        <DrawnArtwork name="contactSmallFlower" className="contact-small-flower" drawOnVisible />
        <DrawnArtwork name="contactStar" className="contact-star" drawOnVisible />
        <DrawnArtwork name="contactSpark" className="contact-spark" drawOnVisible />
        <DrawnArtwork name="contactTick" className="contact-tick" drawOnVisible />
      </Reveal>
    </footer>
  );
}
