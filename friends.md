---
title: 友链
description: 认识一些在网上认真写字的人，也欢迎在页面下方留下脚印。
category: 小岛来信
---

<script setup lang="ts">
import WalineComments from './.vitepress/theme/components/WalineComments.vue'
</script>

<section class="friends-page">
  <div class="friends-page__intro">
    <p class="eyebrow">交换一张纸页</p>
    <h2>友链</h2>
    <p>
      这里会放下我在网上遇见的站点。等整理好彼此的介绍，再把它们一张张贴到小岛的墙上。
    </p>
  </div>

  <section class="friends-list" aria-labelledby="friends-list-title">
    <div class="friends-empty">
      <span class="friends-empty__stamp">待更新</span>
      <h3 id="friends-list-title">友链正在整理中</h3>
      <p>先把留言留在这里，之后会补上站名、网址、头像和一小段介绍。</p>
    </div>
  </section>

  <section class="friends-comments" aria-labelledby="friends-comments-title">
    <header class="friends-comments__header">
      <p class="eyebrow">留下脚印</p>
      <h2 id="friends-comments-title">留言</h2>
      <p>填写昵称和邮箱即可留言。邮箱只用于显示头像，不会公开展示。</p>
    </header>
    <WalineComments />
  </section>
</section>
