import React from "react";
import "./Home.css";
import Dictionary from "../../components/home/Dictionary.js";
import Accordion from "../../components/home//Accordion.js";
import Link from "../../components/home/Link.js";

const Home = () => {
  const linkInfo = [
    {
      url: "file:///Users/farahamer/Documents/resume.pdf",
      title: "Resume",
      text: "Check out Farah’s qualifications and work experience!",
      link: "/assets/Farah-Amer-Resume.pdf",
    },
    {
      url: "https://www.linkedin.com > farah-amer",
      title: "LinkedIn | Farah Amer - Queen's University ...",
      text: "View Farah Amer's profile on LinkedIn, the world's largest professional community. Farah has 4 jobs listed on their profile. See the complete profile on LinkedIn ...",
      link: "https://www.linkedin.com/in/farah-amer/",
    },
    {
      url: "https://github.com > farahwamer",
      title: "Github | @farahwamer",
      text: "farahwamer has 4 repositories available. Follow their code on Github.",
      link: "https://github.com/farahwamer",
    },
    {
      url: "https://dribbble.com > wamerz",
      title: "Dribbble | @wamerz",
      text: "Explore this designers work on Dribbble, the best place for to designers gain inspiration, feedback, community, and jobs worldwide.",
      link: "https://dribbble.com/wamerz",
    },
  ];

  return (
    <div className="home-container">
      <Dictionary />
      <Accordion />
      {linkInfo.map((obj) => {
        return (
          <Link
            url={obj.url}
            title={obj.title}
            text={obj.text}
            link={obj.link}
          />
        );
      })}
    </div>
  );
};

export default Home;
