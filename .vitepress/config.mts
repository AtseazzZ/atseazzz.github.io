import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'zzz-island',
  description: 'Atsea_zzZ 的小岛，一座记录代码、生活与微小发现的岛。',
  cleanUrls: true,
  base: '/',
  srcExclude: ['README.md', 'docs/superpowers/**'],
  appearance: false,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/island-mark.svg' }]],
  lastUpdated: true,
  markdown: {
    headers: true,
  },
  themeConfig: {
    logo: '/island-mark.svg',
    siteTitle: 'zzz-island',
    nav: [
      { text: '小岛首页', link: '/' },
      { text: '归档', link: '/archive' },
      { text: '友链', link: '/friends' },
      { text: '关于小岛', link: '/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AtseazzZ' },
    ],
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
      label: '这一页的路标',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: '把今天的小事放在纸上，明天再慢慢读。',
      copyright: '© 2026 Atsea_zzZ',
    },
  },
})
