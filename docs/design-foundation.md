# Portfolio design foundation

Scope: homepage first, followed by five case studies. No page rebuild yet.

## Palette
Paper #fdf6e9, primary ink #182c45, secondary ink #293c50,
button blue #426085, grid blue #3189db, decorative pink #e18391,
and decorative orange #eea34c. Grid and orange are provisional until the
exported assets are compared visually. Text links use darker pink #a83e55
for legibility; the lighter pink remains decorative.

## Typography
Rock Salt: name and handwritten section headings.
Open Sans with condensed width and weight 300: introductory and body copy
where the design uses Open Sans Condensed. Open Sans normal width: controls,
labels, and case-study titles. Load both through Google Fonts with swap.
Use real text rather than images of text. Size tokens are fluid. Final values
will be tuned against the rendered homepage, especially Rock Salt line boxes.

## Layout
4px-based spacing scale, 80rem maximum content width, 65ch reading width.
Page gutters grow from 20px to 80px. Section spacing grows from 64px to 128px.
Starting layout ranges: mobile below 48rem, tablet 48–64rem, desktop above
64rem; introduce actual media queries where content needs to reflow.
Use normal document flow and grid/flex layouts for content. Position decorative
art relative to its section. Preserve intentional rotations and asymmetry.

## Background and assets
Retrieve the original grid SVGs from Figma. Keep grid, cream fade, and doodles
as separate layers, with no temporary Figma URLs at runtime. Maintain square
cells and crop/reposition per viewport. No background animation planned.

## Motion plan
Hero lettering appears first, followed by doodles drawing in sequence over
roughly 1–2 seconds, then staying still. Inspect SVG geometry before choosing
stroke animation or a reveal mask; preserve the original visible artwork.
Sections reveal once with a small upward movement. Links and buttons receive
short hover/focus transitions. Reduced-motion users see the completed design
immediately. Add motion after reviewing the static homepage.

## Integration
Shared tokens are in src/styles/foundation.css, imported by src/index.js.
Wrap the new homepage in .portfolio-site to activate the scoped base styles.
Legacy pages retain their existing appearance until replaced. Keep the resume
and useful existing assets. Preserve the user's .vscode/settings.json change.
