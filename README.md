# Deploy bundle — drop into `JamesMcKenna-lol/jamesmckenna-live`

This folder is a drop-in replacement for the GitHub Pages repo root.

## How to push live

```bash
# from your local clone of the repo
git checkout main
git pull

# unzip the deploy/ contents into the repo root (overwrites existing files)
cp -r deploy/* /path/to/jamesmckenna-live/

git add -A
git commit -m "Redesign: retro/neon AI landing"
git push origin main
```

GitHub Pages will rebuild within a minute or two and **jamesmckenna.live** will show the new design.

## What's in here

| File | Notes |
|------|-------|
| `index.html` | Entry point — React + Babel via CDN |
| `colors_and_type.css` | Design tokens (colors, type, glow, motion) |
| `tokens.css` | Landing-page styles, imports tokens |
| `App.jsx` + 9 component `.jsx` files | React components |
| `assets/` | Logo, portrait, project images, SVG textures |
| `CNAME` | Pinned to `jamesmckenna.live` |

## Caveats — read before pushing

1. **Babel-in-browser.** This bundle uses Babel Standalone at runtime to transpile JSX in the browser. It works on GitHub Pages with no build step, but adds ~1 MB of JS and ~200ms to first paint. For a production-grade build, run the JSX through a build tool (Vite, Parcel, esbuild) once and commit the compiled `bundle.js`.
2. **"Intercom" → "Fin AI"** in copy. Revert in `About.jsx` and `Hero.jsx` if you want the previous wording.
3. **way-farer.io project card** uses the vision-mixing image as a placeholder — swap in a real screenshot when you have one.
4. **JM logo** is a hand-drawn SVG placeholder. Replace `assets/jm-logo.svg` with your own vector mark.

## Files removed from old repo

The old repo had `style.css` and `main.js` at root. Those are replaced by `tokens.css` + `colors_and_type.css` and a tree of `.jsx` files respectively. Safe to delete the old ones when you push.
