# Farah Amer — Portfolio

React portfolio based on the illustrated Figma design.

## Development

- `npm ci` installs dependencies from the lockfile.
- `npm start` starts the development server.
- `npm run build` produces the production site in `build/`.

## Structure

- `src/pages/home/Home.js` composes the homepage sections.
- `src/components/portfolio/home/` contains the hero, About, Experience,
  and Contact sections with their styles, plus experience/project components.
- `src/components/portfolio/` contains shared artwork, social links, and
  resume components.
- `src/data/portfolioLinks.js` and `portfolioProjects.js` contain link and
  project data.
- `src/styles/foundation.css` defines shared design tokens and base styles.
- `src/assets/farah-portrait.svg` is the About portrait.
- `public/assets/figma/` contains locally stored Figma artwork.

The homepage and all five case studies are implemented, with entrance,
scroll-reveal, and doodle animations. Project URLs use `/#/projects/<project-id>`
so direct links and refreshes work on static hosting without server rewrites.
Case-study content is in `src/data/caseStudies.json`; the shared layout and
page components are in `src/pages/case-studies/` and
`src/components/portfolio/case-studies/`.
The resume PDF and active favicon live in `public/assets/`.
