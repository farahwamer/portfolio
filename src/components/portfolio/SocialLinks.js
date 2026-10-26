import PropTypes from "prop-types";
import React from "react";
import "./SocialLinks.css";
import assets from "./assets.json";
import { socials } from "../../data/portfolioLinks";

export default function SocialLinks({ large = false }) {
  return (
    <ul className="social-links" aria-label="Find me online">
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} aria-label={s.label} title={s.label}>
            <img
              src={
                large
                  ? [
                      assets.imgEllipse26,
                      assets.imgEllipse27,
                      assets.imgEllipse28,
                    ][socials.indexOf(s)]
                  : s.icon
              }
              alt=""
              width="44"
              height="44"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

SocialLinks.propTypes = {
  large: PropTypes.bool,
};
