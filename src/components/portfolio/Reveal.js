import React, { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// Render the existing semantic element without adding a layout wrapper.
export default function Reveal({
  as: Element = "div",
  className = "",
  children,
  onFocusCapture,
  ...props
}) {
  const ref = useRef(null);
  const [state, setState] = useState("pending");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) {
      setState("immediate");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState((current) => current === "pending" ? "visible" : current);
          observer.disconnect();
        }
      },
      // A zero threshold also works for experience entries taller than a screen.
      { threshold: 0, rootMargin: "0px 0px -24px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      {...props}
      ref={ref}
      className={`section-reveal ${className}`}
      data-reveal-state={state}
      onFocusCapture={(event) => {
        // Keyboard navigation must never leave a focused link faded out.
        setState("immediate");
        if (onFocusCapture) onFocusCapture(event);
      }}
    >
      {children}
    </Element>
  );
}
