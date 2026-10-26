import React from "react";

// Render the semantic text structure extracted from Figma, without its fixed
// coordinates or raw HTML. This preserves paragraphs, emphasis, and lists.
export default function CaseStudyContent({ content }) {
  if (typeof content === "string") return content;
  if (!content) return null;
  return React.createElement(
    content.tag,
    content.props,
    content.children.map((child, index) => (
      <CaseStudyContent key={index} content={child} />
    )),
  );
}
