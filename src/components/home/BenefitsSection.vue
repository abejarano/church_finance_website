<template>
  <section id="benefits" class="benefits section">
    <div class="container">
      <h2 class="section-title">{{ $t('benefits.title') }}</h2>
      <p class="section-subtitle">{{ $t('benefits.subtitle') }}</p>
      
      <div class="benefits-content">
        <div class="benefits-image">
          <img src="@/assets/img/dashboard.png" alt="Dashboard Preview" class="preview-image" />
          <div class="image-decoration"></div>
        </div>
        
        <div class="benefits-list">
          <div 
            v-for="benefit in benefits" 
            :key="benefit.id"
            class="benefit-item fade-in"
            :style="{ animationDelay: `${benefit.id * 0.2}s` }"
          >
            <div class="benefit-icon">
              <font-awesome-icon :icon="['fas', benefit.icon]" />
            </div>
            <div class="benefit-text">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faChartPie, 
  faMobileAlt, 
  faLock, 
  faClock,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Añadir iconos a la biblioteca
library.add(
  faChartPie, 
  faMobileAlt, 
  faLock, 
  faClock,
  faCloudDownloadAlt
);

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
        icon: 'chart-pie',
        title: t('benefits.benefit1.title'),
        description: t('benefits.benefit1.description')
      },
      {
        id: 2,
        icon: 'mobile-alt',
        title: t('benefits.benefit2.title'),
        description: t('benefits.benefit2.description')
      },
      {
        id: 3,
        icon: 'lock',
        title: t('benefits.benefit3.title'),
        description: t('benefits.benefit3.description')
      },
      {
        id: 4,
        icon: 'clock',
        title: t('benefits.benefit4.title'),
        description: t('benefits.benefit4.description')
      },
      {
        id: 5,
        icon: 'cloud-download-alt',
        title: t('benefits.benefit5.title'),
        description: t('benefits.benefit5.description')
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
  position: relative;
  overflow: hidden;
  padding: $spacing-3xl 0;
  
  .container {
    position: relative;
    z-index: 2;
  }
  
  .section-title {
    color: $text;
    text-align: center;
    margin-bottom: $spacing-md;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, $accent, $primary);
      margin: $spacing-md auto 0;
      border-radius: $border-radius-full;
    }
  }
  
  .section-subtitle {
    text-align: center;
    max-width: 700px;
    margin: 0 auto $spacing-2xl;
    color: $dark-gray;
    font-size: $font-size-lg;
  }
  
  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-2xl;
    align-items: center;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }
  
  &-image {
    position: relative;
    padding: $spacing-xl;
    
    .preview-image {
      width: 100%;
      height: auto;
      border-radius: $border-radius-lg;
      box-shadow: 0 15px 30px rgba($text, 0.15);
      position: relative;
      z-index: 2;
      border: 1px solid $gray;
    }
    
    .image-decoration {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba($accent, 0.1), rgba($primary, 0.05));
      border-radius: $border-radius-lg;
      transform: rotate(-3deg) scale(1.05);
      z-index: 1;
    }
    
    @media (max-width: $breakpoint-lg) {
      order: 2;
    }
  }
  
  &-list {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    
    @media (max-width: $breakpoint-lg) {
      order: 1;
    }
  }
  
  .benefit-item {
    display: flex;
    gap: $spacing-md;
    
    &:hover {
      .benefit-icon {
        background-color: $primary;
        color: $light;
        transform: scale(1.05);
      }
    }
  }
  
  .benefit-icon {
    width: 50px;
    height: 50px;
    background-color: rgba($accent, 0.1);
    color: $primary;
    border-radius: $border-radius-md;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    flex-shrink: 0;
    transition: all $transition-normal;
  }
  
  .benefit-text {
    h3 {
      font-size: $font-size-lg;
      font-weight: 600;
      margin-bottom: $spacing-sm;
      color: $text;
    }
    
    p {
      color: $dark-gray;
      line-height: 1.6;
    }
  }
  
  .bg-shape {
    position: absolute;
    z-index: 1;
    
    &.shape-1 {
      width: 300px;
      height: 300px;
      background-color: rgba($tertiary, 0.05);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      top: -80px;
      right: -100px;
    }
    
    &.shape-2 {
      width: 400px;
      height: 400px;
      background-color: rgba($secondary, 0.05);
      border-radius: 62% 38% 46% 54% / 60% 68% 32% 40%;
      bottom: -200px;
      left: -150px;
    }
  }
}
</style> 