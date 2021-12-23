import React from "react";
import "./Home.css";
import Dictionary from "/Users/farahamer/Desktop/portfolio/src/components/home/Dictionary.js";
import Accordion from "/Users/farahamer/Desktop/portfolio/src/components/home/Accordion.js";

const Home = () => {
  return (
    <div className="home-container">
      <Dictionary />
      <Accordion />
    </div>
  );
};

export default Home;
