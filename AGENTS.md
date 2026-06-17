# Agent Instructions - StratoWard Site

Codename: STRATOWARD-SITE

This is a static website repo. The public site is `index.html`.

## Rules

- Keep the site deployable as static HTML/CSS/JS.
- Do not add server-only requirements unless the user explicitly asks.
- Do not reference local absolute paths such as `C:\...` or `file://...` in the public page.
- Keep assets in the repo if new images, fonts, scripts, or styles are added.
- Prefer small, direct edits to `index.html` unless the user asks to split files.
- Do not store secrets, tokens, API keys, or private project data in this repo.

## Verification

For simple HTML/CSS edits:

1. Open or serve `index.html`.
2. Check desktop and mobile widths.
3. Confirm there are no broken local asset references.

If a browser tool is available, capture a screenshot after visual changes.
