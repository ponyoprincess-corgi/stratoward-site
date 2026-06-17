# Next Steps

This repo is staged locally, but not committed or pushed because Git identity and GitHub auth are not configured on this machine.

## 1. Configure Git identity once

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use your GitHub no-reply email if you prefer privacy.

## 2. Log into GitHub CLI once

```powershell
gh auth login
```

Choose GitHub.com, HTTPS, and browser login.

## 3. Publish the repo

From this folder:

```powershell
cd C:\Users\KhangLe\Documents\stratoward-site
powershell -ExecutionPolicy Bypass -File .\scripts\publish-github.ps1
```

The script creates/pushes a GitHub repo named `stratoward-site`.

## 4. Put it online

Fastest options:

- GitHub Pages: repo Settings -> Pages -> deploy from branch `main`, folder `/`.
- Cloudflare Pages: Workers & Pages -> Create application -> Pages -> Import GitHub repo -> `stratoward-site`.
- Netlify/Vercel: import the GitHub repo, leave build command blank, output directory `.`.

## 5. Let Codex or Claude edit it

Point Codex or Claude Code at the GitHub repo or this local folder. They should edit `index.html`, commit changes, and push or open a PR. The host redeploys from `main`.
