<template>
    <section id="features" class="features section">
      <div class="decorative-shape left" data-scroll>
        <div class="shape-content">
          <div class="circle" style="top: 15%; left: 25%"></div>
          <div class="circle" style="top: 45%; left: 40%"></div>
          <div class="circle" style="top: 75%; left: 20%"></div>
          <div class="circle" style="top: 35%; left: 65%"></div>
          <div class="circle" style="top: 85%; left: 55%"></div>
        </div>
      </div>
      <div class="decorative-shape right" data-scroll>
        <div class="shape-content">
          <div class="circle" style="top: 25%; right: 35%"></div>
          <div class="circle" style="top: 55%; right: 25%"></div>
          <div class="circle" style="top: 80%; right: 45%"></div>
          <div class="circle" style="top: 15%; right: 60%"></div>
          <div class="circle" style="top: 65%; right: 65%"></div>
        </div>
      </div>
      <div class="container">
        <h2 class="section-title">{{ $t('features.title') }}</h2>
        <p class="section-description">{{ $t('features.description') }}</p>
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
  
  <script setup lang="ts">
  import { computed, onMounted, onUnmounted } from '@vue/runtime-core';
  import { useI18n } from 'vue-i18n';
  import FeatureCard from '@/components/ui/FeatureCard.vue';
  
  const { t } = useI18n();

  const handleScroll = () => {
    const shapes = document.querySelectorAll('.decorative-shape');
    const featuresSection = document.getElementById('features');
    
    if (featuresSection) {
      const sectionRect = featuresSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.2; // 20% from the top of viewport

      shapes.forEach((shape) => {
        // Check if section is entering viewport
        if (sectionRect.top <= triggerPoint && sectionRect.bottom >= 0) {
          shape.setAttribute('data-scroll', 'in');
        } else {
          shape.setAttribute('data-scroll', 'out');
        }
      });
    }
  };

  let rafId: number | null = null;

  const throttledScroll = () => {
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScroll);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  });
  
  interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
  }
      
  // Usar computed para que las características se actualicen cuando cambie el idioma
  const features = computed<Feature[]>(() => [
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
  </script>
  
  <style lang="scss" scoped>
  .features {
    background-color: $light-gray;
    position: relative;
    overflow: hidden;

    .decorative-shape {
      position: absolute;
      top: 0;
      height: 100%;
      width: 30%;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(30px);

      &.left {
        left: -3%;
        
        .shape-content {
          background: linear-gradient(135deg, rgba($accent, 0.15) 0%, rgba($accent, 0.08) 100%);
          border-radius: 0 70% 70% 0;
          transform-origin: left center;
          box-shadow: 20px 0 40px rgba($accent, 0.1);
        }

        &[data-scroll='in'] {
          opacity: 1;
          transform: translateY(0);
        }
      }

      &.right {
        right: -3%;
        
        .shape-content {
          background: linear-gradient(225deg, rgba($secondary, 0.15) 0%, rgba($secondary, 0.08) 100%);
          border-radius: 70% 0 0 70%;
          transform-origin: right center;
          box-shadow: -20px 0 40px rgba($secondary, 0.1);
        }

        &[data-scroll='in'] {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .shape-content {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: visible;
        z-index: 2;
        
        .circle {
          position: absolute;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba($accent, 0.2) 0%, rgba($secondary, 0.2) 100%);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
          animation: float 6s infinite;
          z-index: 3;
          
          &:nth-child(even) {
            width: 30px;
            height: 30px;
            animation-delay: -3s;
            animation-duration: 8s;
            background: linear-gradient(135deg, rgba($secondary, 0.2) 0%, rgba($accent, 0.2) 100%);
          }

          &:nth-child(3n) {
            width: 20px;
            height: 20px;
            animation-delay: -2s;
            animation-duration: 7s;
            background: linear-gradient(135deg, rgba($accent, 0.15) 0%, rgba($secondary, 0.15) 100%);
          }
        }
        
        &:after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(50px);
          z-index: 1;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) scale(1.1) rotate(5deg);
          }
        }
      }
    }
  
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
      margin-bottom: $spacing-md;
    }

    .section-description {
      color: $text;
      font-size: $font-size-lg;
      max-width: 800px;
      margin: 0 auto $spacing-3xl;
      text-align: center;
      line-height: 1.6;
    
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