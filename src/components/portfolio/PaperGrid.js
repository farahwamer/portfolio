import PropTypes from "prop-types";
import React from "react";
import Artwork from "./Artwork";
import "./PaperGrid.css";

export default function PaperGrid({ fadeArtwork = "gridFade" }) {
  return (
    <div className="paper-grid" aria-hidden="true">
      <Artwork name="gridVertical" />
      <Artwork name="gridHorizontal" />
      <Artwork name={fadeArtwork} />
    </div>
  );
}

PaperGrid.propTypes = {
  fadeArtwork: PropTypes.string,
};
