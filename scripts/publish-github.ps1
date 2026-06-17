param(
  [string]$RepoName = "stratoward-site",
  [switch]$Private
)

$ErrorActionPreference = "Stop"

function Require-Command($Name) {
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Missing required command: $Name"
  }
}

Require-Command git
Require-Command gh

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

gh auth status | Out-Null

if (-not (Test-Path -LiteralPath ".git")) {
  git init -b main
}

if (-not (git config user.name)) {
  throw "Git user.name is not configured. Run: git config --global user.name `"Your Name`""
}

if (-not (git config user.email)) {
  throw "Git user.email is not configured. Run: git config --global user.email `"you@example.com`""
}

git add .

$hasCommit = $true
git rev-parse --verify HEAD 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  $hasCommit = $false
}

if (-not $hasCommit) {
  git commit -m "Initial StratoWard static site"
} else {
  $status = git status --porcelain
  if ($status) {
    git commit -m "Update StratoWard static site"
  }
}

$visibility = "--public"
if ($Private) {
  $visibility = "--private"
}

if (-not (git remote get-url origin 2>$null)) {
  gh repo create $RepoName $visibility --source . --remote origin --push
} else {
  git push -u origin main
}

Write-Host ""
Write-Host "Published source repo."
Write-Host "Next: enable GitHub Pages for branch main, folder /, or connect this repo to Cloudflare Pages."
