<template>
  <div class="language-selector">
    <select v-model="currentLanguage" @change="changeLanguage" aria-label="Seleccione idioma">
      <option v-for="lang in availableLanguages" :key="lang.value" :value="lang.value">
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { availableLanguages, setLanguage } from '@/i18n';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const currentLanguage = ref(i18n.locale.value);

function changeLanguage() {
  setLanguage(currentLanguage.value);
}

onMounted(() => {
  // Asegurar que el idioma del componente coincida con el global
  currentLanguage.value = i18n.locale.value;
});
</script>

<style scoped>
.language-selector {
  position: relative;
  margin-left: 1rem;
}

select {
  appearance: none;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1.5rem 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: inherit;
}

.language-selector::after {
  content: '▼';
  font-size: 0.7rem;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

@media (max-width: 768px) {
  .language-selector {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style> 