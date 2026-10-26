import React, { useEffect, useRef, useState } from "react";
import Artwork from "./Artwork";
import drawingAssets from "./drawingAssets.json";
import "./DrawnArtwork.css";

// Delay loading the animated variant until visible so offscreen drawings
// play on arrival. Once started, they remain complete on subsequent visits.
export default function DrawnArtwork({
  drawOnVisible = false,
  className = "",
  ...props
}) {
  const containerRef = useRef(null);
  const [started, setStarted] = useState(!drawOnVisible);

  useEffect(() => {
    if (!drawOnVisible || started) return;
    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [drawOnVisible, started]);

  return (
    <Artwork
      {...props}
      className={`${className}${started ? "" : " drawing-pending"}`}
      containerRef={containerRef}
      assetOverrides={started ? drawingAssets : undefined}
    />
  );
}
