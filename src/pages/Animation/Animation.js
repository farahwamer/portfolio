import { React, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Animation.css";
import { AiOutlineSearch } from "react-icons/ai";

const Animation = (props) => {
  const [show, setShow] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const hide = () => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);

    setTimeout(() => {
      setShow(false);
      props.onEnd(true);
    }, 1500);
  };
  return (
    <div className="animation-container" id={!show ? "hide" : null}>
      <section className="search-container" id={showLoader ? "hide" : null}>
        <img src={logo} alt="logo" className="animation-logo" />
        <div className="animation-searchbar">
          <AiOutlineSearch size={20} />
          <div className="animation-typing-container">
            <div className="animation-typing" onAnimationEnd={() => hide()}>
              Farah Amer
            </div>
          </div>
        </div>
      </section>
      <section className="loader-containter" id={showLoader ? null : "hide"}>
        <div className="loader"></div>
      </section>
    </div>
  );
};

export default Animation;
