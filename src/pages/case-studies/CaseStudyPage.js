import React from "react";
import Reveal from "../../components/portfolio/Reveal";
import CaseStudyHeader from "../../components/portfolio/case-studies/CaseStudyHeader";
import CaseStudyContent from "../../components/portfolio/case-studies/CaseStudyContent";
import CaseStudyHighlight from "../../components/portfolio/case-studies/CaseStudyHighlight";
import BackToExperience from "../../components/portfolio/case-studies/BackToExperience";
import "./CaseStudyPage.css";

export default function CaseStudyPage({ study, project }) {
  return (
    <main className="portfolio-site case-study" aria-labelledby="case-study-title">
      <CaseStudyHeader study={study} project={project} />
      <div className="case-study-body portfolio-container">
        <Reveal as="section" className="case-study-section" aria-labelledby="case-problem-heading">
          <h2 id="case-problem-heading">The Problem</h2>
          <CaseStudyContent content={study.problem} />
        </Reveal>
        <Reveal as="section" className="case-study-section" aria-labelledby="case-solution-heading">
          <h2 id="case-solution-heading">The Solution</h2>
          <CaseStudyContent content={study.solution} />
        </Reveal>
        <section className="case-study-section" aria-labelledby="case-highlights-heading">
          <h2 id="case-highlights-heading">Highlights</h2>
          <div className="case-highlights">
            {study.highlights.map((highlight) => <CaseStudyHighlight key={highlight.title} highlight={highlight} />)}
          </div>
        </section>
        <nav className="case-bottom-navigation" aria-label="Return to portfolio">
          <BackToExperience projectId={project.id} />
        </nav>
      </div>
    </main>
  );
}
