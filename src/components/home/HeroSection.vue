<template>
  <section class="hero">
    <div class="geometric-circle"></div>
    <div class="geometric-square"></div>
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
          <div class="mockup-content">
            <div class="mockup-chart">
              <div class="chart-bars">
                <div class="chart-bar" style="height: 60%;"></div>
                <div class="chart-bar" style="height: 80%;"></div>
                <div class="chart-bar" style="height: 55%;"></div>
                <div class="chart-bar" style="height: 90%;"></div>
                <div class="chart-bar" style="height: 70%;"></div>
                <div class="chart-bar" style="height: 85%;"></div>
              </div>
            </div>
            <div class="mockup-metrics">
              <div class="metric">
                <div class="metric-icon">
                  <font-awesome-icon :icon="['fas', 'chart-line']" />
                </div>
                <div class="metric-info">
                  <div class="metric-label">{{ texts.income }}</div>
                  <div class="metric-value">R$ 15.235,00</div>
                </div>
                <div class="metric-trend up">
                  <font-awesome-icon :icon="['fas', 'arrow-up']" />
                  <span>12%</span>
                </div>
              </div>
              <div class="metric">
                <div class="metric-icon">
                  <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />
                </div>
                <div class="metric-info">
                  <div class="metric-label">{{ texts.donations }}</div>
                  <div class="metric-value">+125</div>
                </div>
                <div class="metric-trend up">
                  <font-awesome-icon :icon="['fas', 'arrow-up']" />
                  <span>8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-shape"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import CtaButton from '@/components/common/CtaButton.vue';
import { computed } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faChurch, 
  faCross, 
  faHandsPraying, 
  faChartLine, 
  faHandHoldingDollar, 
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons
library.add(faChurch, faCross, faHandsPraying, faChartLine, faHandHoldingDollar, faArrowUp);

const { t, locale } = useI18n();

// Propiedad computada para los textos que dependen del idioma
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
  padding: 150px 0 100px;
  
  @include dark-gradient-background(
    150deg, 
    $primary, 
    $tertiary, 
    $accent,
    $light,
    $secondary,
    true, 
    0.15
  );
  
  .geometric-circle, .geometric-square {
    // Estos elementos los agrega el mixin cuando $with-shapes es true
  }
  
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-2xl;
    position: relative;
    z-index: 2; // Aumentamos el z-index para que esté por encima de las formas
    
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
  
  .dashboard-mockup {
    width: 100%;
    max-width: 540px;
    background-color: white;
    border-radius: $border-radius-lg;
    overflow: hidden;
    box-shadow: $shadow-elevation;
    
    .mockup-header {
      background-color: #f5f5f7;
      padding: $spacing-xs $spacing-md;
      display: flex;
      align-items: center;
      
      .mockup-dots {
        display: flex;
        gap: 6px;
        
        span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          
          &:nth-child(1) {
            background-color: #ff5f57;
          }
          
          &:nth-child(2) {
            background-color: #febc2e;
          }
          
          &:nth-child(3) {
            background-color: #28c840;
          }
        }
      }
    }
    
    .mockup-content {
      padding: $spacing-lg;
      
      .mockup-chart {
        padding: $spacing-md;
        background-color: $light-gray;
        border-radius: $border-radius-md;
        margin-bottom: $spacing-lg;
        
        .chart-bars {
          height: 160px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          
          .chart-bar {
            width: 12%;
            background: linear-gradient(to top, $primary, color.adjust($primary, $lightness: 15%));
            border-radius: $border-radius-sm $border-radius-sm 0 0;
          }
        }
      }
      
      .mockup-metrics {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: $spacing-md;
        
        .metric {
          background-color: $light-gray;
          border-radius: $border-radius-md;
          padding: $spacing-md;
          display: flex;
          align-items: center;
          
          .metric-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background-color: rgba($primary, 0.1);
            color: $primary;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: $spacing-md;
          }
          
          .metric-info {
            flex: 1;
            
            .metric-label {
              font-size: $font-size-xs;
              color: $dark-gray;
              margin-bottom: 2px;
            }
            
            .metric-value {
              font-weight: 600;
              color: $text;
            }
          }
          
          .metric-trend {
            &.up {
              color: $secondary;
            }
            
            &.down {
              color: #ef4444;
            }
            
            font-size: $font-size-xs;
            display: flex;
            align-items: center;
            gap: 2px;
          }
        }
      }
    }
  }
}
</style>