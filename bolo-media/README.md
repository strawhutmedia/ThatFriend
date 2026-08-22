# Bolo Media — Website

Fun, light-gray branding site for Bolo Productions, LLC ("Bolo Media").
Pure static HTML/CSS/JS — no frameworks, no build step, no dependencies.

The logo is a sign hanging from a bolo tie, so on the homepage it sways.
Hover it and it sways harder.

## Brand

Palette riffed Adobe-Color-style around the bolo tie itself — the logo's
gray is the "silver," turquoise is the stone, and the rest is the fun:

- **Silver gray** `#676767` — sampled directly from the logo PNGs
- **Turquoise** `#3eb8af` — the stone; ticker, hero burst, accents
- **Coral** `#ff6b5e` / **Mustard** `#ffb830` / **Pink** `#f686bd` — accents
- **Charcoal** `#2e2a26` — ink, borders, hard shadows
- **Cream** `#fbf3e2` — page background

Fonts (Google Fonts): **Oswald** (display — matches the logo's condensed
gothic letterforms) + **Nunito Sans** (body — Avenir stand-in, per the
logo package report)

Easter egg: clicking the homepage logo fires confetti (skipped under
`prefers-reduced-motion`).

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
