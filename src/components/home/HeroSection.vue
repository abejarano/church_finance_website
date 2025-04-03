<template>
  <section class="hero">
    <div class="container">
      <h1>{{ texts.title }}</h1>
      <p>{{ texts.subtitle }}</p>
      <div class="hero-cta">
        <CtaButton 
          :text="texts.ctaButton" 
          variant="primary" 
          @click="handleDemoRequest"
        />
        <CtaButton 
          :text="texts.knowMoreButton" 
          variant="secondary" 
          @click="scrollToFeatures"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import CtaButton from '@/components/common/CtaButton.vue';
import { computed } from 'vue';

const { t, locale } = useI18n();

// Propiedad computada para los textos que dependen del idioma
const texts = computed(() => ({
  title: t('hero.title'),
  subtitle: t('hero.subtitle'),
  ctaButton: t('hero.ctaButton'),
  knowMoreButton: t('navbar.knowMore')
}));

const handleDemoRequest = () => {
  // Aquí podría ir lógica para abrir un formulario modal o redirigir a una página
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToFeatures = () => {
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.hero {
  background: linear-gradient(135deg, $primary 30%, darken($primary, 15%) 100%);
  color: white;
  padding: 150px 0 100px;
  text-align: center;
  
  h1 {
    font-size: $font-size-4xl;
    margin-bottom: $spacing-lg;
    font-weight: 700;
  }
  
  p {
    font-size: $font-size-lg;
    max-width: 700px;
    margin: 0 auto $spacing-xl;
    opacity: 0.9;
  }
  
  &-cta {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    
    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>