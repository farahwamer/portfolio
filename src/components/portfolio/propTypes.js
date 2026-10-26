import PropTypes from "prop-types";

// Content and artwork use recursive element trees extracted from the designs.
export function contentType(...args) {
  return PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      props: PropTypes.object,
      children: PropTypes.arrayOf(contentType).isRequired,
    }),
  ])(...args);
}

export const projectType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  technologies: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
});

export const highlightType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: contentType,
  art: PropTypes.string,
  side: PropTypes.oneOf(["left", "right"]),
});

export const studyType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  problem: contentType,
  solution: contentType,
  highlights: PropTypes.arrayOf(highlightType).isRequired,
});
