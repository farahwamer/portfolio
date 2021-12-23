import React from "react";
import "./Navbar.css";
import logo from "./img/logo.svg";
import { AiOutlineSearch, AiOutlineProject } from "react-icons/ai";

const Navbar = (props) => {
  const activeStyle = { borderBottom: "4px solid #e89897", color: "#e89897" };
  return (
    <div className="navbar-container">
      <section className="navbar-top-row">
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="navbar-searchbar">
          <AiOutlineSearch size={20} />
        </div>
      </section>
      <section className="navbar-bottom-row">
        <div
          className="navbar-all"
          style={props.page === "Home" ? activeStyle : { borderBottom: "none" }}
          onClick={() => props.setPage("Home")}
        >
          <AiOutlineSearch size={15} />
          <p>All</p>
        </div>
        <div
          className="navbar-projects"
          style={
            props.page === "Projects" ? activeStyle : { borderBottom: "none" }
          }
          onClick={() => props.setPage("Projects")}
        >
          <AiOutlineProject size={15} />
          <p>Projects</p>
        </div>
      </section>
    </div>
  );
};

Navbar.defaultProps = {
  page: "Home",
};

export default Navbar;
