import desktopNotes from "./desktopNotes.png";
import marketing from "./marketingConsultancy.png";
import portfolio from "./portfolio.svg";
import scorpion from "./scorpion.png";
import figma from "./figma.png";
import react from "./react.png";
import git from "./git.png";
import redux from "./redux.png";
import node from "./node.png";
import express from "./express.png";
import sql from "./sql.png";

import desktopNotes1 from "./desktopNotes1.png";
import desktopNotes2 from "./desktopNotes2.png";
import marketingConsultancy1 from "./marketingConsultancy1.png";
import marketingConsultancy2 from "./marketingConsultancy2.png";

export const projectList = [
  {
    src: portfolio,
    alt: "Portfolio Website",
    title: "Portfolio Website",
    text: "search-engine-themed!",
    url: "https://www.farahwamer.com",
    small: true,
    stack: [react, git, figma],
    description: "Search-engine themed interactive portfolio website.",
    relatedImages: [],
    sourceCode: "https://github.com/farahwamer/portfolio",
  },
  {
    src: desktopNotes,
    alt: "Desktop Notes",
    title: "Desktop Notes",
    text: " take notes on a desktop simulator",
    url: "https://affectionate-pasteur-831865.netlify.app/",
    small: false,
    stack: [react, git, figma],
    description:
      "A simple note-taking website that simulates a desktop environment",
    relatedImages: [desktopNotes1, desktopNotes2],
    sourceCode: "https://github.com/farahwamer/desktop-notes",
  },
  {
    src: marketing,
    alt: "Business Page",
    title: "Business Page",
    text: "marketing consultancy",
    url: "https://github.com/farahwamer/wamers-marketing-consultancy",
    small: true,
    stack: [react, git, figma],
    description: "Single-page business website for a new marketing consultancy",
    relatedImages: [marketingConsultancy1, marketingConsultancy2],
    sourceCode: "https://github.com/farahwamer/wamers-marketing-consultancy",
  },
  {
    src: scorpion,
    alt: "Scorpion Bug Tracker",
    title: "Scorpion",
    text: "simple bug-tracker for personal projects",
    url: "coming soon!",
    small: false,
    stack: [react, redux, sql, express, node, git, figma],
    description: "Simple and customizeable bug tracker for personal projects",
    relatedImages: [],
    sourceCode: "",
  },
];
