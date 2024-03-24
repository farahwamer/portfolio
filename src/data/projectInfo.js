import desktopNotes from "../assets/desktopNotes.png";
import marketing from "../assets/marketingConsultancy.png";
import portfolio from "../assets/portfolio.svg";
import scorpion from "../assets/scorpion.png";
import figma from "../assets/figma.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";

import desktopNotes1 from "../assets/desktopNotes1.png";
import desktopNotes2 from "../assets/desktopNotes2.png";
import marketingConsultancy1 from "../assets/marketingConsultancy1.png";
import marketingConsultancy2 from "../assets/marketingConsultancy2.png";
import psychClinic from "../assets/psychClinic.png";

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
    src: psychClinic,
    alt: "Database Application for Psychology Clinic",
    title: "Database Application",
    text: "Inventory Management and Reservation System",
    small: false,
    stack: [react, python, sql, git, figma],
    description:
      "Allows administration to keep track of inventory and clients to reserve items from the clinic's library of testing kits.",
    relatedImages: [],
    sourceCode: "https://github.com/queens-psyc-clinic/app",
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
