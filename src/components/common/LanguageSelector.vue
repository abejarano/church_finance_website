<template>
  <div class="language-selector">
    <select
      v-model="currentLanguage"
      aria-label="Seleccione idioma"
      @change="changeLanguage"
    >
      <option
        v-for="lang in availableLanguages"
        :key="lang.value"
        :value="lang.value"
      >
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { availableLanguages, setLanguage } from "@/i18n"; // Importar desde nuestro nuevo plugin

const i18n = useI18n();
const currentLanguage = ref(i18n.locale.value);

function changeLanguage() {
  setLanguage(currentLanguage.value as any);
}

onMounted(() => {
  // Asegurar que el idioma del componente coincida con el global
  currentLanguage.value = i18n.locale.value;
});
</script>

<style scoped>
/* Estilos sin cambios */
</style>
