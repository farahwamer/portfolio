import React from "react";
import Artwork from "../Artwork";
import Reveal from "../Reveal";
import CaseStudyContent from "./CaseStudyContent";

const diagramLabels = {
  underwritingDependencies: "A directed graph showing dependencies between AI agents",
  underwritingReliability: "A task queue with retries for failed background work",
  wealthDeployment: "Cloud deployment pipeline with settings and connected stages",
};

export default function CaseStudyHighlight({ highlight }) {
  return (
    <Reveal as="article" className={`case-highlight${highlight.art ? ` case-highlight-illustrated case-highlight-art-${highlight.side}` : ""}`}>
      <div className="case-highlight-copy">
        <h3>{highlight.title}</h3>
        <CaseStudyContent content={highlight.content} />
      </div>
      {highlight.art && (
        <figure className={`case-highlight-figure case-figure-${highlight.art}`}>
          <Artwork name={highlight.art} label={diagramLabels[highlight.art]} />
        </figure>
      )}
    </Reveal>
  );
}
