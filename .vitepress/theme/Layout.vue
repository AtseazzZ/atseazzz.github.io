<script setup lang="ts">
import { computed } from 'vue'
import { Content, useData, useRoute } from 'vitepress'
import IslandMark from './components/IslandMark.vue'
import PostCard from './components/PostCard.vue'
import SiteHeader from './components/SiteHeader.vue'
import { data as posts } from './posts.data'

const { frontmatter, page } = useData()
const route = useRoute()
const isHome = computed(() => route.path === '/')
const currentPostIndex = computed(() => posts.findIndex((post) => post.href === route.path))
const isPost = computed(() => page.value.relativePath.startsWith('posts/'))
const previousPost = computed(() => posts[currentPostIndex.value + 1])
const nextPost = computed(() => currentPostIndex.value > 0 ? posts[currentPostIndex.value - 1] : undefined)
const headers = computed(() => page.value.headers ?? [])

const year = new Date().getFullYear()
</script>

<template>
  <div class="site-shell" :class="{ 'site-shell--home': isHome, 'site-shell--post': isPost }">
    <SiteHeader />

    <main v-if="isHome" class="home-page">
      <section class="home-intro" aria-labelledby="home-title">
        <div class="home-intro__copy">
          <p class="eyebrow">写代码，也写小事</p>
          <h1 id="home-title">Atsea_zzZ <em>的小岛</em></h1>
          <p class="home-intro__lead">
            写一点代码，记一点生活，收集那些在路上捡到的微小发现。每一篇文章都是一张还带着体温的纸页。
          </p>
          <div class="home-intro__actions">
            <a class="button button--ink" href="/archive">去翻翻归档 <span aria-hidden="true">→</span></a>
            <a class="text-link" href="/about">认识这座小岛</a>
          </div>
        </div>
        <div class="home-intro__figure" aria-hidden="true">
          <div class="figure-sun"></div>
          <div class="figure-paper">
            <span>ISLAND POST</span>
            <strong>给明天<br />留张纸</strong>
            <i></i>
          </div>
          <div class="figure-animal">
            <div class="figure-animal__ear figure-animal__ear--left"></div>
            <div class="figure-animal__ear figure-animal__ear--right"></div>
            <div class="figure-animal__face">
              <span class="figure-animal__eye figure-animal__eye--left"></span>
              <span class="figure-animal__eye figure-animal__eye--right"></span>
              <span class="figure-animal__mouth"></span>
            </div>
            <div class="figure-animal__body"></div>
          </div>
        </div>
      </section>

      <section class="latest-section" aria-labelledby="latest-title">
        <h2 id="latest-title" class="section-heading">最近写下的纸页</h2>
        <div class="post-grid">
          <PostCard v-for="post in posts" :key="post.href" v-bind="post" />
        </div>
      </section>

      <section class="island-compass" aria-labelledby="compass-title">
        <div class="island-compass__mark"><IslandMark /></div>
        <div>
          <h2 id="compass-title">小岛罗盘</h2>
          <p>技术札记收录开发实践和工具笔记。岛屿手记留给写代码以外的日常。</p>
        </div>
        <div class="island-compass__links">
          <a class="text-link" href="/archive#技术札记">技术札记 <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="/archive#岛屿手记">岛屿手记 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <p class="home-note">潮水来去，记下来的东西就有了岸。</p>
    </main>

    <main v-else-if="isPost" class="article-layout">
      <article class="article-page">
        <header class="article-header">
          <a class="article-back" href="/archive">← 全部纸页</a>
          <p class="eyebrow">{{ frontmatter.category || '小岛纸页' }}</p>
          <h1>{{ frontmatter.title }}</h1>
          <p class="article-description">{{ frontmatter.description }}</p>
          <div class="article-meta">
            <time :datetime="frontmatter.date">{{ frontmatter.date }}</time>
            <span>{{ frontmatter.author || 'Atsea_zzZ' }}</span>
            <span v-for="tag in frontmatter.tags || []" :key="tag" class="article-tag">#{{ tag }}</span>
          </div>
        </header>
        <nav v-if="headers.length" class="article-toc" aria-label="文章目录">
          <p class="article-toc__title">这一页的路标</p>
          <ul>
            <li v-for="header in headers" :key="header.slug">
              <a :href="header.link">{{ header.title }}</a>
              <ul v-if="header.children.length">
                <li v-for="child in header.children" :key="child.slug"><a :href="child.link">{{ child.title }}</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="vp-doc article-body"><Content /></div>
        <nav v-if="previousPost || nextPost" class="article-pagination" aria-label="文章导航">
          <a v-if="previousPost" class="article-pagination__item article-pagination__item--previous" :href="previousPost.href">
            <span>上一篇</span><strong>{{ previousPost.title }}</strong>
          </a>
          <a v-if="nextPost" class="article-pagination__item article-pagination__item--next" :href="nextPost.href">
            <span>下一篇</span><strong>{{ nextPost.title }}</strong>
          </a>
        </nav>
      </article>
    </main>

    <main v-else class="doc-page">
      <header v-if="frontmatter.title" class="doc-page__header">
        <p class="eyebrow">{{ frontmatter.category || '小岛纸页' }}</p>
        <h1>{{ frontmatter.title }}</h1>
        <p v-if="frontmatter.description">{{ frontmatter.description }}</p>
      </header>
      <div class="vp-doc doc-page__content"><Content /></div>
    </main>

    <footer class="site-footer">
      <span>© {{ year }} Atsea_zzZ / zzz-island</span>
    </footer>
  </div>
</template>
