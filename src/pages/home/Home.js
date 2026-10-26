import React from "react";
import HeroSection from "../../components/portfolio/home/HeroSection";
import AboutSection from "../../components/portfolio/home/AboutSection";
import ExperienceSection from "../../components/portfolio/home/ExperienceSection";
import ContactSection from "../../components/portfolio/home/ContactSection";
import "./Home.css";

export default function Home() {
  return (
    <main className="portfolio-site" id="top">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
