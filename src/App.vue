<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view/>
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue';
import FooterSection from '@/components/common/FooterSection.vue';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

onMounted(() => {
  // Establecer el atributo lang en el HTML para accesibilidad
  document.documentElement.setAttribute('lang', locale.value);
});
</script>

<style lang="scss">
@use '@/assets/scss/main.scss';
</style>