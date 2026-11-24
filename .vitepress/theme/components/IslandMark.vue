<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean }>(), {
  compact: false,
})
</script>

<template>
  <div class="island-mark" :class="{ 'island-mark--compact': compact }" aria-hidden="true">
    <img src="/island-mark.svg" alt="" />
    <span class="island-mark__note">zzz</span>
  </div>
</template>
