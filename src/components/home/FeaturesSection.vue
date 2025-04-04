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
  import type { Feature } from '@/types';
  
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
    background-color: $light-gray;
    position: relative;
    overflow: hidden;
  
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba($text, 0.03) 0%, rgba($gray, 0.05) 100%);
      z-index: 0;
    }
  
    .container {
      position: relative;
      z-index: 3;
    }
  
    .section-title {
      color: $text;
      position: relative;
      margin-bottom: $spacing-3xl;
    
      &::after {
        content: '';
        display: block;
        width: 80px;
        height: 4px;
        background: linear-gradient(to right, $accent, $secondary);
        margin: $spacing-md auto 0;
        border-radius: $border-radius-full;
      }
    }
  
    &-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-xl;
    }
  
    .bg-shape {
      position: absolute;
      z-index: 1;
    
      &.shape-1 {
        width: 300px;
        height: 300px;
        background-color: rgba($secondary, 0.05);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        top: -50px;
        left: -100px;
      }
    
      &.shape-2 {
        width: 400px;
        height: 400px;
        background-color: rgba($accent, 0.05);
        border-radius: 62% 38% 46% 54% / 60% 68% 32% 40%;
        bottom: -150px;
        right: -150px;
      }
    }
  }
  </style>