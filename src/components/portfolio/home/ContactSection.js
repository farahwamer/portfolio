import React from "react";
import Artwork from "../Artwork";
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
        <Artwork name="gridVertical" />
        <Artwork name="gridHorizontal" />
        <Artwork name="footerFade" />
      </div>
      <div className="portfolio-container contact-content">
        <p className="section-eyebrow">
          Now that we’ve gotten to know each other
        </p>
        <h2 id="contact-heading" className="portfolio-display">
          Drop me a line
        </h2>
        <SocialLinks large />
        <ResumeLink />
        <Artwork name="contactArrow" className="contact-arrow" />
        <Artwork name="contactFlower" className="contact-flower" />
        <Artwork name="contactSmallFlower" className="contact-small-flower" />
        <Artwork name="contactStar" className="contact-star" />
        <Artwork name="contactSpark" className="contact-spark" />
        <Artwork name="contactTick" className="contact-tick" />
      </div>
    </footer>
  );
}
