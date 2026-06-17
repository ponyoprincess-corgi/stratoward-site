# Next Steps

The site is published.

- Source repo: https://github.com/ponyoprincess-corgi/stratoward-site
- Live site: https://ponyoprincess-corgi.github.io/stratoward-site/
- Local repo: `C:\Users\KhangLe\Documents\stratoward-site`

## Edit Flow

Point Codex or Claude Code at this local folder or the GitHub repo. They should edit `index.html`, commit changes, and push or open a PR. GitHub Pages redeploys from `main`.

## Local Preview

```powershell
cd C:\Users\KhangLe\Documents\stratoward-site
powershell -ExecutionPolicy Bypass -File .\scripts\preview.ps1
```

Then open:

```text
http://127.0.0.1:4173
```

## Optional Later

- Add a custom domain in GitHub repo Settings -> Pages.
- Connect the same repo to Cloudflare Pages if you want Cloudflare deploy previews or DNS management.
