<template>
  <section class="hero">
    <GradientBackground>
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>{{ texts.badge }}</span>
          </div>
          <h1>{{ texts.title }}</h1>
          <p>{{ texts.subtitle }}</p>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">+500</span>
              <span class="stat-label">{{ texts.churches }}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">98%</span>
              <span class="stat-label">{{ texts.satisfaction }}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">24/7</span>
              <span class="stat-label">{{ texts.support }}</span>
            </div>
          </div>
          <div class="hero-cta">
            <CtaButton 
              :text="texts.ctaButton" 
              variant="tertiary" 
              @click="handleDemoRequest"
            />
            <CtaButton 
              :text="texts.knowMoreButton" 
              variant="secondary" 
              @click="scrollToFeatures"
            />
          </div>
          <div class="hero-trust">
            <span>{{ texts.trusted }}</span>
            <div class="trust-logos">
              <div class="trust-logo"><font-awesome-icon :icon="['fas', 'church']" /></div>
              <div class="trust-logo"><font-awesome-icon :icon="['fas', 'cross']" /></div>
              <div class="trust-logo"><font-awesome-icon :icon="['fas', 'hands-praying']" /></div>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <div class="dashboard-mockup">
            <div class="mockup-header">
              <div class="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="dashboard-preview">
              <div class="dashboard-frame">
                <img src="@/assets/img/dashboard.png" alt="Dashboard Preview" class="dashboard-image" />
                <div class="frame-decoration top-left"></div>
                <div class="frame-decoration top-right"></div>
                <div class="frame-decoration bottom-left"></div>
                <div class="frame-decoration bottom-right"></div>
              </div>
            </div>
          </div>
          <div class="hero-shape"></div>
        </div>
      </div>
    </GradientBackground>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import CtaButton from '@/components/common/CtaButton.vue';
import GradientBackground from '@/components/common/GradientBackground.vue';

const { t } = useI18n();

const texts = computed(() => ({
  badge: t('hero.badge'),
  title: t('hero.title'),
  subtitle: t('hero.subtitle'),
  ctaButton: t('hero.ctaButton'),
  knowMoreButton: t('navbar.knowMore'),
  churches: t('hero.churches'),
  satisfaction: t('hero.satisfaction'),
  support: t('hero.support'),
  trusted: t('hero.trusted'),
  income: t('hero.income'),
  donations: t('hero.donations')
}));

const handleDemoRequest = () => {
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
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/functions" as *;

.hero {
  position: relative;
  color: white;
  margin-top: 80px;
  
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-2xl;
    position: relative;
    padding: 100px 0 100px;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  &-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: $border-radius-full;
    padding: $spacing-xs $spacing-md;
    margin-bottom: $spacing-lg;
    font-size: $font-size-xs;
    font-weight: 500;
    
    @media (max-width: $breakpoint-lg) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  h1 {
    font-size: $font-size-4xl;
    line-height: 1.2;
    margin-bottom: $spacing-lg;
    font-weight: 700;
    
    @media (max-width: $breakpoint-md) {
      font-size: $font-size-3xl;
    }
  }
  
  p {
    font-size: $font-size-lg;
    max-width: 560px;
    margin: 0 0 $spacing-xl;
    opacity: 0.9;
    
    @media (max-width: $breakpoint-lg) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  &-stats {
    display: flex;
    align-items: center;
    margin-bottom: $spacing-xl;
    
    @media (max-width: $breakpoint-lg) {
      justify-content: center;
    }
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      gap: $spacing-md;
    }
    
    .stat-item {
      display: flex;
      flex-direction: column;
      
      .stat-value {
        font-size: $font-size-2xl;
        font-weight: 700;
        color: $secondary;
      }
      
      .stat-label {
        font-size: $font-size-xs;
        opacity: 0.8;
      }
    }
    
    .stat-divider {
      height: 40px;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 0 $spacing-lg;
      
      @media (max-width: $breakpoint-sm) {
        display: none;
      }
    }
  }
  
  &-cta {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
    
    @media (max-width: $breakpoint-lg) {
      justify-content: center;
    }
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  
  &-trust {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-md;
    
    @media (max-width: $breakpoint-lg) {
      align-items: center;
    }
    
    span {
      font-size: $font-size-xs;
      opacity: 0.7;
    }
    
    .trust-logos {
      display: flex;
      gap: $spacing-lg;
      
      .trust-logo {
        font-size: 24px;
        opacity: 0.8;
      }
    }
  }
  
  &-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: $breakpoint-lg) {
      margin-top: $spacing-2xl;
    }
  }
  
  &-shape {
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba($secondary, 0.15);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(80px);
    z-index: -1;
  }
  
  .dashboard-preview {
    padding: $spacing-lg;
    
    .dashboard-frame {
      position: relative;
      border-radius: $border-radius-lg;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: $spacing-lg;
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          45deg,
          rgba($accent, 0.1),
          rgba($accent, 0.05)
        );
        z-index: 0;
      }
      
      .dashboard-image {
        position: relative;
        width: 100%;
        height: auto;
        border-radius: $border-radius-md;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(0);
        transition: transform 0.3s ease;
        z-index: 1;
        
        &:hover {
          transform: translateY(-4px);
        }
      }
      
      .frame-decoration {
        position: absolute;
        width: 40px;
        height: 40px;
        z-index: 2;
        
        &::before,
        &::after {
          content: '';
          position: absolute;
          background: $accent;
        }
        
        &.top-left {
          top: $spacing-md;
          left: $spacing-md;
          
          &::before {
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
          }
          
          &::after {
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
          }
        }
        
        &.top-right {
          top: $spacing-md;
          right: $spacing-md;
          
          &::before {
            top: 0;
            right: 0;
            width: 3px;
            height: 100%;
          }
          
          &::after {
            top: 0;
            right: 0;
            width: 100%;
            height: 3px;
          }
        }
        
        &.bottom-left {
          bottom: $spacing-md;
          left: $spacing-md;
          
          &::before {
            bottom: 0;
            left: 0;
            width: 3px;
            height: 100%;
          }
          
          &::after {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
          }
        }
        
        &.bottom-right {
          bottom: $spacing-md;
          right: $spacing-md;
          
          &::before {
            bottom: 0;
            right: 0;
            width: 3px;
            height: 100%;
          }
          
          &::after {
            bottom: 0;
            right: 0;
            width: 100%;
            height: 3px;
          }
        }
      }
    }
  }
}
</style>