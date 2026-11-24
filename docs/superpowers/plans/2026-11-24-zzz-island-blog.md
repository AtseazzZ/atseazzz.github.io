# zzz-island 博客 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a deployable VitePress personal blog named `zzz-island` with an original warm paper-like visual theme and a GitHub Pages workflow.

**Architecture:** VitePress owns static page generation and Markdown content. A custom theme in `.vitepress/theme` owns the homepage, article shell, archive/about pages, and visual tokens. GitHub Actions builds `.vitepress/dist` and deploys it to GitHub Pages.

**Tech Stack:** VitePress, Vue 3, Markdown, CSS, GitHub Actions, npm.

**Spec:** `docs/superpowers/specs/2026-11-24-zzz-island-blog-design.md`

## Global Constraints

- The site name is `zzz-island` and the Chinese name is “Atsea_zzZ 的小岛”.
- The default deployment target is the user site repository `AtseazzZ.github.io`, so the base path is `/`.
- The visual language is warm, hand-drawn, paper-textured, and original. Do not reproduce TinyType Zoo assets or templates.
- Markdown is the source of truth for article content.
- The first release includes home, posts, archive, and about pages.

---

### Task 1: Bootstrap VitePress project

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `.editorconfig`
- Create: `.vitepress/config.mts`
- Create: `index.md`
- Create: `posts/first-note.md`
- Create: `posts/island-log.md`
- Create: `archive.md`
- Create: `about.md`

**Interfaces:**
- Produces npm scripts `docs:dev`, `docs:build`, and `docs:preview`.
- Produces Markdown pages consumed by the custom theme.

- [ ] Create npm metadata and scripts for VitePress.
- [ ] Configure the site title, description, base path, clean URLs, Markdown options, and navigation labels.
- [ ] Add two dated Markdown posts with frontmatter fields `title`, `description`, `date`, `tags`, and `category`.
- [ ] Add archive and about Markdown route stubs.
- [ ] Add ignore rules for dependencies, generated output, editor files, and local logs.
- [ ] Run `npm install` and `npm run docs:build` to verify the scaffold.

### Task 2: Implement the custom reading theme

**Files:**
- Create: `.vitepress/theme/index.ts`
- Create: `.vitepress/theme/Layout.vue`
- Create: `.vitepress/theme/styles/vars.css`
- Create: `.vitepress/theme/styles/base.css`
- Create: `.vitepress/theme/styles/components.css`
- Create: `.vitepress/theme/components/IslandMark.vue`
- Create: `.vitepress/theme/components/PostCard.vue`
- Create: `.vitepress/theme/components/SiteHeader.vue`

**Interfaces:**
- `Layout.vue` consumes VitePress route data and frontmatter, and renders the shared shell.
- `PostCard.vue` consumes `title`, `description`, `date`, `tags`, and `href` props.
- `IslandMark.vue` renders the original island messenger line-art mark without external assets.

- [ ] Define a small set of CSS variables for paper, ink, moss, clay, sky, spacing, shadows, and typography.
- [ ] Build the site header with text links and visible active state.
- [ ] Build the article card with paper layering, a rotated stamp, metadata, and a clear reading action.
- [ ] Build the main layout with a responsive content column, side notes, and article typography.
- [ ] Keep controls keyboard reachable and preserve visible focus states.
- [ ] Run the dev server and inspect desktop and mobile screenshots for overflow and text collisions.

### Task 3: Build content pages and navigation

**Files:**
- Modify: `index.md`
- Modify: `archive.md`
- Modify: `about.md`
- Modify: `.vitepress/theme/Layout.vue`
- Modify: `.vitepress/theme/components/PostCard.vue`

**Interfaces:**
- Home uses a static list of current posts for the first release.
- Archive groups the same post metadata by month without a backend.

- [ ] Add the homepage introduction, latest notes, island compass, and a small hand-written footer note.
- [ ] Add archive month groups and links to both posts.
- [ ] Add about content that explains the site name, writing themes, and repository link.
- [ ] Make Markdown post pages show date, category, tags, and previous/next links.
- [ ] Verify every navigation target from the home page works in a local preview.

### Task 4: Add GitHub Pages deployment

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Interfaces:**
- Workflow triggers on pushes to `main` and manual dispatch.
- Workflow publishes `.vitepress/dist` to the `github-pages` environment.

- [ ] Add the official Pages workflow with checkout, setup-node, npm ci, VitePress build, artifact upload, and Pages deploy steps.
- [ ] Set `contents: read`, `pages: write`, and `id-token: write` permissions.
- [ ] Document local development, build, preview, and Pages setup in `README.md`.
- [ ] Validate the workflow YAML and run a local production build.

### Task 5: Verify and prepare the first commit

**Files:**
- Modify: any files required by verification findings.

- [ ] Run `npm run docs:build` from a clean install.
- [ ] Start `npm run docs:dev -- --host 127.0.0.1` and inspect home, article, archive, and about routes.
- [ ] Check the production HTML for generated article pages and asset paths.
- [ ] Initialize Git, create the `main` branch, and commit the local implementation.
- [ ] Check whether the GitHub account is authenticated in an available browser session before attempting remote creation.
