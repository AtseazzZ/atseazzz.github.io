<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  href: string
  accent?: 'moss' | 'clay' | 'sky'
}>()
</script>

<template>
  <article class="post-card" :class="`post-card--${accent || 'moss'}`">
    <div class="post-card__stamp">{{ category }}</div>
    <time class="post-card__date" :datetime="date">{{ date }}</time>
    <h3><a :href="href">{{ title }}</a></h3>
    <p class="post-card__description">{{ description }}</p>
    <div class="post-card__footer">
      <div class="post-card__tags" aria-label="文章标签">
        <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
      </div>
      <a class="post-card__read" :href="href" :aria-label="`打开纸页：${title}`">打开纸页 <span aria-hidden="true">↗</span></a>
    </div>
  </article>
</template>
