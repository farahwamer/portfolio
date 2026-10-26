import React, { useLayoutEffect, useRef, useState } from "react";
import artwork from "./artwork.json";
import "./Artwork.css";

function Layer({ node }) {
  return React.createElement(
    node.tag,
    node.props,
    node.tag === "img"
      ? undefined
      : node.children.map((child, i) => <Layer key={i} node={child} />),
  );
}

// Fixed coordinates are confined to the original illustration layers.
// The surrounding page uses normal responsive document flow.
export default function Artwork({ name, className = "", label }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  const art = artwork[name];
  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / art.w),
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [art.w]);
  return (
    <div
      ref={ref}
      className={`original-art ${className}`}
      style={{ aspectRatio: `${art.w} / ${art.h}` }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div
        style={{
          position: "absolute",
          width: art.w,
          height: art.h,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translate(${-art.x}px, ${-art.y}px)`,
          }}
        >
          <Layer node={art.tree} />
        </div>
      </div>
    </div>
  );
}
