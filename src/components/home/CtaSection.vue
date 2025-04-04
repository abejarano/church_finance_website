<template>
  <section class="cta-section">
    <div class="geometric-circle"></div>
    <div class="geometric-square"></div>
    <div class="container">
      <h2>{{ texts.title }}</h2>
      <p>{{ texts.subtitle }}</p>
      <CtaButton 
        :text="texts.button" 
        variant="primary" 
        @click="scrollToContact"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import CtaButton from '@/components/common/CtaButton.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'CtaSection',
  components: {
    CtaButton
  },
  setup() {
    const { t, locale } = useI18n();
    
    // Usar computed para que los textos se actualicen cuando cambie el idioma
    const texts = computed(() => ({
      title: t('cta.title'),
      subtitle: t('cta.subtitle'),
      button: t('cta.button')
    }));
    
    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return {
      texts,
      scrollToContact
    };
  }
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/functions" as *;

.cta-section {
  position: relative;
  padding: $spacing-3xl 0;
  color: $light;
  text-align: center;
  
  @include dark-gradient-background(
    45deg, 
    $primary, 
    $tertiary, 
    $accent,
    $light,
    $secondary,
    true, 
    0.18
  );
  
  .container {
    position: relative;
    z-index: 2;
  }
  
  h2 {
    font-size: $font-size-3xl;
    margin-bottom: $spacing-lg;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-2xl;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto $spacing-xl;
    font-size: $font-size-lg;
    opacity: 0.9;
  }
}
</style>

    