# Anu Yesh Sinha · Portfolio

A static site (plain HTML, CSS, JS). No build step, so GitHub Pages serves it as-is.

## Before you publish: 3 things to fill in

1. **Links**: open `script.js` and fill in the `LINKS` block at the top (LinkedIn URL and the
   three carousel post URLs). A button with an empty link hides itself, and the Writing
   section stays hidden until at least one post link is set.
2. **Photo**: save a headshot as `assets/photo.jpg` (portrait, about 800×1000). Until then
   the page shows an "AS" monogram.
3. **Resume**: `assets/Anu-Yesh-Sinha-Resume.pdf` is currently the V9 EY GDS version.
   Replace it with whichever CV you want recruiters to see (keep the same filename).

## ReliefChain prototype (`reliefchain/`)

The blockchain disaster relief simulator, copied from its original build so it runs from
this site at `https://YOUR-USERNAME.github.io/reliefchain/` with no dependency on Google
AI Studio. It's a compiled React app (one JS file, one CSS file) that makes no external
calls. Asset paths were changed from `/assets/` to `./assets/` so it works in a subfolder.
If you rebuild it later, replace the files in `reliefchain/` and keep the paths relative.

## Publish on GitHub Pages

1. On github.com, create a **public** repository named exactly `YOUR-USERNAME.github.io`.
   Don't add a README, licence or .gitignore.
2. Push this folder (run from inside `portfolio/`):

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

   When git asks for a password, paste a GitHub **Personal Access Token**
   (Settings → Developer settings → Personal access tokens), not your account password.
3. In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io`.

To update later: edit, then `git add -A && git commit -m "Update" && git push`.

## What was borrowed from the NextLeap example portfolios

| Their pattern | How it shows up here |
|---|---|
| Name, one-line positioning, Resume + LinkedIn above the fold | Hero with a thesis line and three buttons |
| One "graduation project" given full width with its problem statement | IDBI nuclear coverage as the flagship, laid out as problem → funnel → output |
| Project cards with a visual thumbnail and an outcome-style title | Designed covers; each title is the question the project answered |
| Publications & Links section | Writing section for the LinkedIn explainers |
| Work experience and education kept compact, below the work | Background section at the end |

Where this goes further: their cards are thumbnails that link out to a PDF deck, so a
recruiter learns nothing without clicking. Here every card states the question and the
method on the page, with the detail one tap away.
