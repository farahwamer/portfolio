import { React } from "react";
import logo from "./img/logo.svg";
import "./Animation.css";
import { AiOutlineSearch } from "react-icons/ai";

const Animation = () => {
  return (
    <div className="animation-container">
      <img src={logo} alt="logo" className="animation-logo" />
      <div className="animation-searchbar">
        <AiOutlineSearch size={20} />
        <div className="animation-typing-container">
          <div className="animation-typing">Farah Amer</div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
