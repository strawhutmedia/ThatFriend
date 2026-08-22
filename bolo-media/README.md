# Bolo Media — Website

Fun, light-gray branding site for Bolo Productions, LLC ("Bolo Media").
Pure static HTML/CSS/JS — no frameworks, no build step, no dependencies.

The logo is a sign hanging from a bolo tie, so on the homepage it sways.
Hover it and it sways harder.

## Brand

Palm Springs pastels; the logo's charcoal/gray is used as **trim only**
(borders, outlines, hard shadows). (Palette deliberately avoids the
teal/coral/mustard family.)

- **Desert sand** `#faf4ec` — page background
- **Flamingo pink** `#f6b8c8` — hero circle, title plaques
- **Pool sky** `#a8d8ea` — ticker, accents
- **Mint** `#abdec6` / **Butter** `#f7e196` / **Lavender** `#cdbcec` — accents
- **Trim charcoal** `#3a3430` / **White** `#ffffff` — ink, borders, cards

Fonts (Google Fonts): **Oswald** (display — matches the logo's condensed
gothic letterforms) + **Nunito Sans** (body — Avenir stand-in, per the
logo package report)

Fun & motion (all vanilla, no libraries; everything respects
`prefers-reduced-motion`):

- The logo sways; hovering makes it sway harder **and sprinkle stars**
- Clicking it does a squash-and-stretch boing + fires pastel confetti
- Cards pop in as they scroll into view (CSS scroll-driven animations,
  `animation-timeline: view()` — graceful no-op in older browsers)
- Page-to-page navigation crossfades (View Transitions API,
  `@view-transition` — ditto)
- The ticker pauses on hover so it can actually be read

## Structure

```
bolo-media/
├── index.html      Home — swinging logo, tagline, ticker marquee
├── press.html      Press — festival banner + news cards
├── team.html       Team — Ryan Tillotson, Alex Wall, William Sterling
├── style.css       Shared stylesheet (all pages)
└── assets/
    ├── bolo-logo.png           solid logo, open clasp (primary)
    ├── bolo-logo-alt.png       solid logo, filled clasp
    ├── bolo-logo-outline.png   outline variant
    ├── favicon.svg             tiny hand-drawn bolo-sign favicon
    └── team/                   headshots (resized for web)
```

Logo source: Dropbox `/Straw Hut Team Folder/2_CLIENTS/BOLO/Branding/BoloMedia_Logo_Folder/`

## Moving to its own repo

This folder is fully self-contained (relative paths only). To move it to a
dedicated repo:

1. Create the new repo (e.g. `strawhutmedia/bolo-media`).
2. Copy the contents of this folder to the repo root.
3. Enable GitHub Pages (Settings → Pages → deploy from `main`, root).
4. Add a `CNAME` file containing the custom domain, and add an empty
   `.nojekyll` file.

## Loose ends

- **Nav IMDb/Instagram** currently point at That Friend's pages as an
  interim; swap for Bolo's own accounts when they exist.
- **Team IMDb links** use IMDb name-search URLs; swap for exact
  `imdb.com/name/nm…` profile URLs when handy.
