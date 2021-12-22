import React from "react";
import "./Navbar.css";
import logo from "./img/logo.svg";
import { AiOutlineSearch, AiOutlineProject } from "react-icons/ai";

const Navbar = (props) => {
  var activePage = props.page;
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
          id={activePage === "Home" ? "active" : null}
        >
          <AiOutlineSearch size={15} />
          <p>All</p>
        </div>
        <div
          className="navbar-projects"
          id={activePage === "Projects" ? "active" : null}
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
