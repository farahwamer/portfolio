import React from "react";
import farahPortrait from "../../assets/farah-portrait.svg";
import Artwork from "../../components/portfolio/Artwork";
import assets from "../../components/portfolio/assets.json";
import "./Home.css";

const resume = "/assets/Farah-Amer-Resume.pdf";
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farah-amer/",
    icon: assets.imgEllipse23,
  },
  {
    label: "GitHub",
    href: "https://github.com/farahwamer",
    icon: assets.imgEllipse24,
  },
  {
    label: "Email",
    href: "mailto:farahwamer@gmail.com",
    icon: assets.imgEllipse25,
  },
];

function ResumeLink() {
  return (
    <a className="resume-link" href={resume} download>
      <img src={assets.imgFiRrDownload} alt="" width="20" height="20" />
      Grab Full Resume
    </a>
  );
}
function SocialLinks({ large = false }) {
  return (
    <ul className="social-links" aria-label="Find me online">
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} aria-label={s.label}>
            <img
              src={
                large
                  ? [
                      assets.imgEllipse26,
                      assets.imgEllipse27,
                      assets.imgEllipse28,
                    ][socials.indexOf(s)]
                  : s.icon
              }
              alt=""
              width="44"
              height="44"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
const projects = [
  {
    id: "commercial-underwriting",
    title: "Commercial Underwriting",
    description:
      "RBC’s first production agentic solution to streamline the commercial credit underwriting process",
    stack: "underwritingStack",
    width: 251,
    technologies: "Angular, Python, FastAPI, PostgreSQL, OpenShift",
  },
  {
    id: "wealth-advisor-insights",
    title: "Wealth Management Investment Advisor Insights",
    description:
      "Transforming complex client financial data into actionable insights, personalized recommendations, and ranked business opportunities for wealth advisors.",
    stack: "wealthStack",
    width: 254,
    technologies: "Vue, Python, FastAPI, PostgreSQL, OpenShift",
  },
  {
    id: "meeting-intelligence",
    title: "Internal Meeting Intelligence",
    description:
      "An AI-powered meeting assistant that transforms recordings into transcripts, summaries, and actionable next steps.",
    stack: "meetingStack",
    width: 242,
    technologies: "React, TypeScript, Node.js, Amazon S3, OpenShift",
  },
  {
    id: "enterprise-data-platform",
    title: "Enterprise Data Platform Website Modernization",
    description:
      "Migrated a static marketing website into a dynamic platform, enabling real-time ticket status tracking and integration with an agent marketplace.",
    stack: "enterpriseStack",
    width: 297,
    technologies: "Liquid, React, JavaScript, Node.js, Amazon S3, OpenShift",
  },
  {
    id: "apex",
    title: "APEX",
    description: "Predicting potential system errors through log analysis",
    stack: "apexStack",
    width: 242,
    technologies: "React, Python, FastAPI, Dynatrace, Elasticsearch",
  },
];
function ProjectSummary({ project }) {
  return (
    <article className="project-summary" id={project.id}>
      <h4>
        {project.title}
        <img
          className="project-arrow"
          src={assets.imgVector133}
          alt=""
          width="16"
          height="16"
        />
      </h4>
      <p>{project.description}</p>
      <div
        className="technology-row"
        style={{ width: project.width }}
        role="img"
        aria-label={project.technologies}
      >
        <Artwork name={project.stack} />
      </div>
    </article>
  );
}
function Experience({ title, dates, children, className = "" }) {
  return (
    <article className={`experience-entry ${className}`}>
      <div className="experience-heading">
        <Artwork name="timelineArrow" className="timeline-marker" />
        <h3>{title}</h3>
        <p className="experience-dates">{dates}</p>
      </div>
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <main className="portfolio-site" id="top">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
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

      <section
        id="experience"
        className="experience-section portfolio-container portfolio-section"
        aria-labelledby="experience-heading"
      >
        <header className="section-header">
          <div>
            <p className="section-eyebrow">
              But enough about me, let’s talk about
            </p>
            <h2 id="experience-heading" className="portfolio-display">
              My Experience
            </h2>
          </div>
          <div className="resume-wrap">
            <ResumeLink />
            {/* <Artwork name="resumeUnderline" className="resume-underline" /> */}
            {/* <Artwork name="resumeMarks" className="resume-marks" /> */}
          </div>
        </header>
        <Experience
          title="Royal Bank of Canada | Borealis AI Group *"
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
        </Experience>
        {/* <aside className="department-note">
          <Artwork name="departmentArrow" />
          <p>
            Same team as above,
            <br />
            new department!
          </p>
        </aside> */}
        <Experience
          title="Royal Bank of Canada | Data & Analytics"
          dates="05/2023 – 08/2023"
        >
          <p className="role-title">Full-Stack Software Developer Co-op</p>
          <p className="experience-prose">
            During my Data &amp; Analytics co-op at RBC, I contributed to the
            bank's enterprise data platform, working across frontend
            development, backend integrations, and reusable UI components. I
            also helped develop and pitch an automated scheduling solution to
            senior bank executives, contributing to its implementation after our
            team won the business case competition.
          </p>
        </Experience>
        <Experience
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
        </Experience>
      </section>

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
    </main>
  );
}
