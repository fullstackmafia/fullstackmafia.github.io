# raphaelugwu portfolio

Portfolio site for Raphael Ugwu, senior technical writer. Built with [Astro](https://astro.build) as a static site.

## Run it locally

Requires Node 22.

```bash
npm install
npm run dev      # local server with live reload
npm run build    # static output in dist/
```

## Where the content lives

| What | File |
| --- | --- |
| Experience timeline, writing links, skills, contact links | `src/data/site.js` |
| Case studies (one Markdown file each) | `src/content/work/` |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Colours, type, layout | `src/styles/global.css` |

To add a case study, add a Markdown file to `src/content/work/` with the same front matter as the existing ones. It gets its own page at `/work/<file-name>/` and a row on the home page.

## Deploying

- **Netlify:** `netlify.toml` sets the build command and publish folder, so no dashboard changes are needed.
- **GitHub Pages:** `.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the repository settings, set Pages > Source to "GitHub Actions".
