# Bolo Media — Website

> **⚠️ MOVED — this folder is legacy.**
> The site's canonical home is now
> **[`strawhutmedia/Bolo-Site`](https://github.com/strawhutmedia/Bolo-Site)**
> and it is live at **https://www.bolo.media** (GitHub Pages, served from
> that repo's `gh-pages` branch). Make all changes there — edits here do
> not affect the live site. See that repo's `README.md` and `CLAUDE.md`
> for deployment rules and context. This copy is kept only for the
> original build history.

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

## Move to its own repo — DONE

The move described in an earlier version of this README happened in
August 2026: the site now lives in
[`strawhutmedia/Bolo-Site`](https://github.com/strawhutmedia/Bolo-Site)
and serves at https://www.bolo.media via GitHub Pages (`gh-pages` branch,
`CNAME` = `www.bolo.media`, HTTPS enforced). All loose ends and TODOs are
tracked in that repo's README/CLAUDE.md, not here.
