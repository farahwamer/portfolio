import PropTypes from "prop-types";
import React from "react";
import Artwork from "./Artwork";
import DrawnArtwork from "./DrawnArtwork";
import "./PaperGrid.css";

export default function PaperGrid({ fadeArtwork = "gridFade" }) {
  return (
    <div className="paper-grid" aria-hidden="true">
      <DrawnArtwork name="gridVertical" />
      <DrawnArtwork name="gridHorizontal" />
      <Artwork name={fadeArtwork} />
    </div>
  );
}

PaperGrid.propTypes = {
  fadeArtwork: PropTypes.string,
};
