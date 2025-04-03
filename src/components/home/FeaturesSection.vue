<template>
    <section id="features" class="features section">
      <div class="container">
        <h2 class="section-title">{{ $t('features.title') }}</h2>
        <div class="features-grid">
          <FeatureCard 
            v-for="feature in features" 
            :key="feature.id" 
            :feature="feature"
            class="fade-in"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import FeatureCard from '@/components/ui/FeatureCard.vue';
  import { Feature } from '@/types';
  
  export default defineComponent({
    name: 'FeaturesSection',
    components: {
      FeatureCard
    },
    setup() {
      const { t, locale } = useI18n();
      
      // Usar computed para que las características se actualicen cuando cambie el idioma
      const features = computed(() => [
        {
          id: 1,
          icon: 'chart-line',
          title: t('features.feature1.title'),
          description: t('features.feature1.description')
        },
        {
          id: 2,
          icon: 'file-invoice-dollar',
          title: t('features.feature2.title'),
          description: t('features.feature2.description')
        },
        {
          id: 3,
          icon: 'users',
          title: t('features.feature3.title'),
          description: t('features.feature3.description')
        },
        {
          id: 4,
          icon: 'file-alt',
          title: t('features.feature4.title'),
          description: t('features.feature4.description')
        },
        {
          id: 5,
          icon: 'tasks',
          title: t('features.feature5.title'),
          description: t('features.feature5.description')
        },
        {
          id: 6,
          icon: 'mobile-alt',
          title: t('features.feature6.title'),
          description: t('features.feature6.description')
        }
      ]);
      
      return {
        features
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .features {
    background-color: $light;
  
    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-xl;
    }
  }
  </style>