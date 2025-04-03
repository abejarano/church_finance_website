<template>
  <section class="cta-section">
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

.cta-section {
  padding: $spacing-3xl 0;
  background: linear-gradient(135deg, $primary 30%, darken($primary, 15%) 100%);
  color: white;
  text-align: center;
  
  h2 {
    font-size: $font-size-3xl;
    margin-bottom: $spacing-lg;
    
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

    