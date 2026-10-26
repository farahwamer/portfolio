import React from "react";
import Reveal from "../Reveal";
import Artwork from "../Artwork";
import ResumeLink from "../ResumeLink";
import ExperienceEntry from "./ExperienceEntry";
import ProjectSummary from "./ProjectSummary";
import { projects } from "../../../data/portfolioProjects";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section portfolio-container portfolio-section"
      aria-labelledby="experience-heading"
    >
      <Reveal as="header" className="section-header">
        <div>
          <p className="section-eyebrow">
            But enough about my hobbies, let's talk about
          </p>
          <h2 id="experience-heading" className="portfolio-display">
            My Experience
          </h2>
        </div>
        <div className="resume-wrap">
          {/* <ResumeLink /> */}
          {/* <Artwork name="resumeUnderline" className="resume-underline" /> */}
          {/* <Artwork name="resumeMarks" className="resume-marks" /> */}
        </div>
      </Reveal>
      <div className="experience-content">
        <ExperienceEntry
          title="Royal Bank of Canada | Borealis AI Group"
          dates="05/2024 – 10/2026"
        >
          <p className="layoff-note">
            * Impacted by mass Q3 layoff which was not based on performance
          </p>
          <ol className="role-history">
            <li>
              <Artwork name="roleSmile" className="role-smile" />
              Senior Full-Stack Software Developer
            </li>
            <li>
              <Artwork name="roleCircle" className="role-circle" />
              Full-Stack Software Developer
            </li>
          </ol>
          <div className="experience-prose">
            <p>
              I worked on building full-stack applications that brought AI into
              real-world banking workflows. My work spanned everything from
              frontend to backend APIs to agent orchestration, system
              architecture, and production deployments. Along the way, I
              collaborated with ML engineering and research teams, mentored
              co-op developers, and helped bring ideas from concept to
              production.
            </p>
            <p>
              * I was also a proud member of the social committee organizing
              events for our team across three cities!
            </p>
          </div>
          <div className="project-list">
            {projects.slice(0, 4).map((p) => (
              <ProjectSummary key={p.id} project={p} />
            ))}
          </div>
        </ExperienceEntry>

        <div>
          <aside className="department-note">
            <Artwork name="departmentArrow" />
            <p>
              Same team as above,
              <br />
              new department!
            </p>
          </aside>
          <ExperienceEntry
            title="Royal Bank of Canada | Data & Analytics"
            dates="05/2023 – 08/2023"
          >
            <p className="role-title">Full-Stack Software Developer Co-op</p>
            <p className="experience-prose">
              During my Data &amp; Analytics co-op at RBC, I contributed to the
              bank's enterprise data platform, working across frontend
              development, backend integrations, and reusable UI components. I
              also helped develop and pitch an automated scheduling solution to
              senior bank executives, contributing to its implementation after
              our team won the business case competition.
            </p>
          </ExperienceEntry>
        </div>

        <ExperienceEntry
          title="Royal Bank of Canada | Amplify"
          dates="05/2022 – 08/2022"
        >
          <p className="role-title">Software Developer Co-op</p>
          <p className="experience-prose">
            During my RBC Amplify co-op, I worked on developing a machine
            learning-powered application to predict potential system errors
            through log analysis. I collaborated with Site Reliability Engineers
            to understand their challenges, refine the solution through
            feedback, and pitch our team's work to senior bank executives.
          </p>
          <div className="project-list">
            <ProjectSummary project={projects[4]} />
          </div>
        </ExperienceEntry>
      </div>
    </section>
  );
}
