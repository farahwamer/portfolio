import React from "react";
import "./Entrance.css";

export default function Entrance({
  as: Element = "div",
  stage = "title",
  className = "",
  children,
  ...props
}) {
  return (
    <Element {...props} className={`entrance entrance-${stage} ${className}`}>
      {children}
    </Element>
  );
}
