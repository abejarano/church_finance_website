<template>
  <span class="typewriter">{{ displayText }}</span>
</template>

<script setup lang="ts">
import { ref, watch } from '@vue/runtime-core';

const props = defineProps<{
  text: string;
  speed?: number;
  startDelay?: number;
}>();

const displayText = ref('');

const typeText = async () => {
  displayText.value = '';
  await new Promise(resolve => setTimeout(resolve, props.startDelay || 0));
  
  for (const char of props.text) {
    displayText.value += char;
    await new Promise(resolve => setTimeout(resolve, props.speed || 50));
  }
};

watch(() => props.text, () => {
  typeText();
}, { immediate: true });
</script>

<style scoped lang="scss">
.typewriter {
  border-right: 2px solid;
  animation: cursor-blink 0.7s infinite;
  padding-right: 2px;
}

@keyframes cursor-blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: currentColor; }
}
</style>
