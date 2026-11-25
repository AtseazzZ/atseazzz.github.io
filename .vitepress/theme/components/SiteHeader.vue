<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import IslandMark from './IslandMark.vue'

const { site } = useData()
const route = useRoute()

const links = [
  { label: '小岛首页', href: '/' },
  { label: '归档', href: '/archive' },
  { label: '友链', href: '/friends' },
  { label: '关于小岛', href: '/about' },
]

const isActive = (href: string) => route.path === href
</script>

<template>
  <header class="site-header">
    <a class="site-header__brand" href="/" aria-label="回到 zzz-island 首页">
      <IslandMark compact />
      <span>
        <strong>{{ site.title }}</strong>
        <small>Atsea_zzZ 的小岛</small>
      </span>
    </a>

    <nav class="site-header__nav" aria-label="主导航">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :aria-current="isActive(link.href) ? 'page' : undefined"
      >
        {{ link.label }}
      </a>
      <a class="site-header__github" href="https://github.com/AtseazzZ">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </nav>
  </header>
</template>
