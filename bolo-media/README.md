# Bolo Media — Website

Minimal branding site for Bolo Productions, LLC ("Bolo Media"). Pure static
HTML/CSS/JS — no frameworks, no build step, no dependencies.

Reference aesthetic: [morningmoon.com](https://morningmoon.com) — dark,
logo-forward, near-monochromatic.

## Structure

```
bolo-media/
├── index.html      Home — wordmark, tagline, That Friend credit line
├── press.html      Press — festival selections + news coverage
├── team.html       Team — vertical headshot layout (placeholders for now)
├── style.css       Shared stylesheet (all pages)
└── assets/
    └── favicon.svg
```

Fonts (Google Fonts): **Cormorant Garamond** (display) + **Montserrat** (nav/body).

## Moving to its own repo

This folder is fully self-contained (relative paths only). To move it to a
dedicated repo:

1. Create the new repo (e.g. `strawhutmedia/bolo-media`).
2. Copy the contents of this folder to the repo root.
3. Enable GitHub Pages (Settings → Pages → deploy from `main`, root).
4. Add a `CNAME` file containing the custom domain, and add an empty
   `.nojekyll` file.

## Content still to drop in

- **Logo** — replace the `.hero-wordmark`/`.hero-sub` text in `index.html`
  with `<img src="assets/bolo-logo.png" alt="Bolo Media" class="hero-logo">`
  (the CSS class already exists).
- **Team** — replace the placeholder members in `team.html` with real names,
  roles, bios, headshots (put images in `assets/team/`), and IMDb links.
- **Nav external links** — the IMDb and Instagram links in the nav of all
  three pages are `href="#"` placeholders (marked with `TODO` comments).
- **Press** — currently seeded with That Friend's Tribeca 2026 coverage;
  add or remove items in `press.html` as needed.
