import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { test } from 'node:test'

const outputDirectory = new URL('../.vitepress/dist/', import.meta.url)

test('build emits the home, archive, about, friends, and both post pages', async () => {
  const routes = [
    'index.html',
    'archive.html',
    'about.html',
    'friends.html',
    'posts/first-note.html',
    'posts/island-log.html',
  ]

  const pages = await Promise.all(
    routes.map((route) => readFile(new URL(route, outputDirectory), 'utf8')),
  )

  assert.match(pages[0], /Atsea_zzZ/)
  assert.match(pages[1], /最近写下的纸页|归档/)
  assert.match(pages[2], /关于这座小岛/)
  assert.match(pages[3], /友链/)
  assert.match(pages[3], /留言/)
  assert.match(pages[3], /友链正在整理中/)
  assert.match(pages[4], /把一个页面慢慢点亮/)
  assert.match(pages[5], /给静态网站留一盏小灯/)
})

test('the friends page only preloads modules that exist in the build', async () => {
  const page = await readFile(new URL('friends.html', outputDirectory), 'utf8')
  const preloadLinks = page.matchAll(/<link rel="modulepreload" href="\/([^"?#]+)"/g)

  for (const [, path] of preloadLinks) {
    await access(new URL(path, outputDirectory))
  }
})
