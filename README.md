# StratoWard Site

Static single-page StratoWard wiki site.

## Files

- `index.html` - the live site.
- `AGENTS.md` - instructions for Codex and other coding agents.
- `CLAUDE.md` - Claude Code entry instructions.
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing.

## Local Preview

Open `index.html` directly, or run a small local server:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Deploy

Recommended flow:

1. Push this folder to a GitHub repo named `stratoward-site`.
2. Connect that repo to Cloudflare Pages, GitHub Pages, Netlify, or Vercel.
3. Let the host auto-deploy whenever the `main` branch changes.

For a single static HTML file, use these settings when a host asks:

- Build command: leave blank
- Output directory: `.`
- Framework preset: None / Static / Other

## AI Editing Workflow

Codex or Claude should edit this repo, not the downloaded HTML copy. Make changes in a branch or PR, preview them, then merge to `main` so the host redeploys.
