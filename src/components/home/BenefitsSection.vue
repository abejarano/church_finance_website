<template>
    <section id="benefits" class="benefits section">
      <div class="container">
        <h2 class="section-title">{{ $t('benefits.title') }}</h2>
        <p class="section-subtitle">{{ $t('benefits.subtitle') }}</p>
        <div class="benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.id" class="benefit-item">
            <font-awesome-icon :icon="['fas', benefit.icon]" class="benefit-icon" />
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { Benefit } from '@/types';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  // Add icons to library
  library.add(faCheckCircle);
  
  export default defineComponent({
    name: 'BenefitsSection',
    components: {
      FontAwesomeIcon
    },
    setup() {
      const { t, locale } = useI18n();
      
      // Usar computed para que los beneficios se actualicen cuando cambie el idioma
      const benefits = computed(() => [
        {
          id: 1,
          icon: 'check-circle',
          title: t('benefits.benefit1.title'),
          description: t('benefits.benefit1.description')
        },
        {
          id: 2,
          icon: 'check-circle',
          title: t('benefits.benefit2.title'),
          description: t('benefits.benefit2.description')
        },
        {
          id: 3,
          icon: 'check-circle',
          title: t('benefits.benefit3.title'),
          description: t('benefits.benefit3.description')
        },
        {
          id: 4,
          icon: 'check-circle',
          title: t('benefits.benefit4.title'),
          description: t('benefits.benefit4.description')
        }
      ]);
      
      return {
        benefits
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .benefits {
    background-color: $background;
    
    &-container {
      display: flex;
      align-items: center;
      gap: $spacing-3xl;
      
      @media (max-width: $breakpoint-md) {
        flex-direction: column;
      }
    }
    
    &-content {
      flex: 1;
      
      h2 {
        font-size: $font-size-3xl;
        margin-bottom: $spacing-xl;
      }
    }
    
    &-list {
      list-style: none;
      
      li {
        margin-bottom: $spacing-lg;
        display: flex;
        align-items: flex-start;
      }
      
      svg {
        color: $primary;
        margin-right: $spacing-md;
        font-size: 1.3rem;
        margin-top: 5px;
      }
      
      h3 {
        font-size: $font-size-lg;
        margin-bottom: $spacing-xs;
      }
      
      p {
        color: $dark-gray;
      }
    }
    
    &-image {
      flex: 1;
      text-align: center;
      
      img {
        max-width: 100%;
        border-radius: $border-radius-lg;
        box-shadow: $shadow-lg;
      }
      
      @media (max-width: $breakpoint-md) {
        order: -1;
      }
    }
  }
  </style>