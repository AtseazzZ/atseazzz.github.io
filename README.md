# zzz-island

Atsea_zzZ 的小岛，一个用 VitePress 写成的个人博客。内容以技术札记为主，也保留一些生活记录。页面使用暖纸色、手绘线条和原创的“岛屿信使”作为视觉线索。

## 本地开发

```bash
npm ci
npm run docs:dev
```

开发服务器启动后，打开终端提示的本地地址即可预览。文章内容位于 `posts/`，共享主题位于 `.vitepress/theme/`。

## 构建与预览

```bash
npm run docs:build
npm test
npm run docs:preview
```

生产文件生成在 `.vitepress/dist`。测试会检查首页、归档页、关于页和两篇示例文章是否被构建。

## GitHub Pages

站点使用 `AtseazzZ/atseazzz.github.io` 作为 GitHub Pages 用户站仓库，VitePress 的根路径是 `base: '/'`。推送到 `main` 或手动运行 `.github/workflows/deploy.yml` 时，GitHub Actions 会构建、检查并发布网站。

首次启用时，在仓库设置中打开 **Settings → Pages**，将构建来源设为 **GitHub Actions**。仓库公开后，站点地址为 `https://atseazzz.github.io/`。

## 发布新文章

把 Markdown 文件放在 `posts/` 目录下，填写以下文章信息。

```yaml
---
title: 文章标题
description: 首页卡片使用的摘要
date: '2026-11-24'
category: 技术札记
tags:
  - Vue
  - GitHub Pages
---
```

在 frontmatter 下用 Markdown 写正文。首页、归档页和上一篇／下一篇会在构建时按日期自动更新。
