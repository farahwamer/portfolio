import React, { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/home/Home";
import CaseStudyPage from "./pages/case-studies/CaseStudyPage";
import caseStudies from "./data/caseStudies.json";
import { projects } from "./data/portfolioProjects";
import { projectIdFromHash } from "./data/portfolioRoutes";
import "./App.css";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const projectId = projectIdFromHash(hash);
  const study = projectId && caseStudies[projectId];
  const project = projectId && projects.find((item) => item.id === projectId);

  useEffect(() => {
    const navigate = () => setHash(window.location.hash);
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);

  useLayoutEffect(() => {
    document.title = study ? `${study.title} | Farah Amer` : "Farah Amer | Portfolio";
    if (projectId) {
      window.scrollTo(0, 0);
      document.getElementById("case-study-title")?.focus({ preventScroll: true });
      return;
    }
    if (hash && !hash.startsWith("#/")) {
      let targetId;
      try { targetId = decodeURIComponent(hash.slice(1)); }
      catch { return; }
      const target = document.getElementById(targetId);
      target?.scrollIntoView();
      // A returned project link gets keyboard focus as well as scroll position.
      target?.querySelector(".project-title-link")?.focus({ preventScroll: true });
    }
  }, [hash, projectId, study]);

  if (study && project) {
    return <CaseStudyPage key={projectId} study={study} project={project} />;
  }
  if (projectId) {
    return (
      <main className="portfolio-site">
        <div className="portfolio-container case-not-found">
          <h1 id="case-study-title" tabIndex="-1">Project not found</h1>
          <p><a href="/#experience">Back to My Experience</a></p>
        </div>
      </main>
    );
  }
  return <Home />;
}
