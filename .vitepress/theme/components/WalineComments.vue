<script setup lang="ts">
import { onMounted, ref } from 'vue'

const serverURL = (import.meta.env.VITE_WALINE_SERVER_URL || '').trim()
const walineComponent = ref()
const loadError = ref(false)

onMounted(async () => {
  if (!serverURL) return

  try {
    const [{ Waline }] = await Promise.all([
      import('@waline/client/component'),
      import('@waline/client/style'),
    ])
    walineComponent.value = Waline
  } catch {
    loadError.value = true
  }
})
</script>

<template>
  <div class="waline-shell">
    <p v-if="!serverURL" class="waline-state">
      留言区正在准备中。服务接通后，访客可以填写昵称和邮箱直接留言。
    </p>
    <p v-else-if="loadError" class="waline-state waline-state--error">
      留言区暂时没有加载成功，请稍后再试。
    </p>
    <component
      :is="walineComponent"
      v-else-if="walineComponent"
      :serverURL="serverURL"
      path="/friends"
      :required-meta="['nick', 'mail']"
      login="disable"
    />
    <p v-else class="waline-state">留言区正在打开……</p>
  </div>
</template>
