import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const outputDirectory = new URL('../.vitepress/dist/', import.meta.url)

test('build emits the home, archive, about, and both post pages', async () => {
  const routes = [
    'index.html',
    'archive.html',
    'about.html',
    'posts/first-note.html',
    'posts/island-log.html',
  ]

  const pages = await Promise.all(
    routes.map((route) => readFile(new URL(route, outputDirectory), 'utf8')),
  )

  assert.match(pages[0], /Atsea_zzZ/)
  assert.match(pages[1], /最近写下的纸页|归档/)
  assert.match(pages[2], /关于这座小岛/)
  assert.match(pages[3], /把一个页面慢慢点亮/)
  assert.match(pages[4], /给静态网站留一盏小灯/)
})
