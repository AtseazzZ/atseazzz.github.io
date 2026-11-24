---
title: 文章归档
description: 按月份翻阅技术札记和岛屿手记。
category: 小岛档案
---

<script setup>
import { data as posts } from './.vitepress/theme/posts.data'

const months = new Map()
const firstInCategory = new Map()

for (const post of posts) {
  const month = post.date.slice(0, 7)
  if (!months.has(month)) months.set(month, [])
  months.get(month).push(post)

  if (!firstInCategory.has(post.category)) firstInCategory.set(post.category, post.href)
}
</script>

<div class="archive-list">
  <section v-for="[month, notes] in months" :key="month" :aria-labelledby="`month-${month}`">
    <h2 :id="`month-${month}`">{{ month.replace('-', ' 年 ') }} 月</h2>
    <article
      v-for="post in notes"
      :id="firstInCategory.get(post.category) === post.href ? post.category : undefined"
      :key="post.href"
      class="archive-note"
    >
      <time :datetime="post.date">{{ post.date }}</time>
      <div>
        <a :href="post.href">{{ post.title }}</a>
        <span class="archive-note__category">{{ post.category }}</span>
        <p>{{ post.description }}</p>
      </div>
    </article>
  </section>
</div>
