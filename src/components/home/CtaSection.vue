<template>
  <section class="cta-section">
    <GradientBackground>
      <div class="container">
        <h2>{{ texts.title }}</h2>
        <p>{{ texts.subtitle }}</p>
        <div class="cta-actions">
          <CtaButton 
            :text="texts.button" 
            variant="primary" 
            @click="scrollToContact"
          />
          <div class="cta-phone">
            <span class="or-call">{{ texts.orCall }}</span>
            <a :href="`tel:${texts.phone}`" class="phone-link">{{ texts.phone }}</a>
          </div>
        </div>
      </div>
    </GradientBackground>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import CtaButton from '@/components/common/CtaButton.vue';
import GradientBackground from '@/components/common/GradientBackground.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'CtaSection',
  components: {
    CtaButton,
    GradientBackground
  },
  setup() {
    const { t } = useI18n();
    
    // Usar computed para que los textos se actualicen cuando cambie el idioma
    const texts = computed(() => ({
      title: t('cta.title'),
      subtitle: t('cta.subtitle'),
      button: t('cta.button'),
      orCall: t('cta.orCall'),
      phone: t('cta.phone')
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
  color: $light;
  text-align: center;
  
  .container {
    position: relative;
    padding: $spacing-3xl 0;
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
  
  .cta-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-lg;
  }
  
  .cta-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    
    .or-call {
      opacity: 0.8;
      font-size: $font-size-sm;
    }
    
    .phone-link {
      color: $accent;
      font-weight: 600;
      text-decoration: none;
      transition: color $transition-normal;
      
      &:hover {
        color: color.adjust($accent, $lightness: 10%);
        text-decoration: underline;
      }
    }
  }
}
</style>

    