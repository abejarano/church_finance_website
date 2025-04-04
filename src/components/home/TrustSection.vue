<template>
  <section class="trust-section section">
    <div class="container">
      <div class="trust-header">
        <h2 class="section-title">{{ $t('trust.title') || 'Confianza y seguridad financiera' }}</h2>
        <p class="section-subtitle">{{ $t('trust.subtitle') || 'Su información financiera está protegida con los más altos estándares de seguridad' }}</p>
      </div>
      
      <div class="trust-features">
        <div class="trust-feature">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'shield-alt']" />
          </div>
          <h3>{{ $t('trust.security.title') || 'Seguridad bancaria' }}</h3>
          <p>{{ $t('trust.security.description') || 'Utilizamos encriptación de nivel bancario para proteger toda su información financiera.' }}</p>
        </div>
        
        <div class="trust-feature">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>
          <h3>{{ $t('trust.privacy.title') || 'Privacidad garantizada' }}</h3>
          <p>{{ $t('trust.privacy.description') || 'Sus datos nunca son compartidos con terceros y cumplimos con todas las regulaciones de protección de datos.' }}</p>
        </div>
        
        <div class="trust-feature">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'cloud']" />
          </div>
          <h3>{{ $t('trust.backup.title') || 'Respaldo automático' }}</h3>
          <p>{{ $t('trust.backup.description') || 'Respaldamos sus datos automáticamente para garantizar que nunca se pierda información importante.' }}</p>
        </div>
      </div>
      
      <div class="compliance-badges">
        <div class="compliance-badge">
          <font-awesome-icon :icon="['fas', 'check-circle']" />
          <span>LGPD</span>
        </div>
        <div class="compliance-badge">
          <font-awesome-icon :icon="['fas', 'check-circle']" />
          <span>Certificado SSL</span>
        </div>
        <div class="compliance-badge">
          <font-awesome-icon :icon="['fas', 'check-circle']" />
          <span>Monitoreo 24/7</span>
        </div>
      </div>      
      
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faShieldAlt, 
  faLock, 
  faCloud, 
  faCheckCircle, 
  faQuoteLeft 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faShieldAlt, faLock, faCloud, faCheckCircle, faQuoteLeft);

export default defineComponent({
  name: 'TrustSection',
  components: {
    FontAwesomeIcon
  }
});
</script>

<style lang="scss" scoped>
.trust-section {
  background-color: $background;
  position: relative;
  overflow: hidden;
  padding: $spacing-3xl 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba($primary, 0.05) 0%, rgba($primary, 0) 70%);
    border-radius: 50%;
    transform: translate(30%, -30%);
    z-index: 0;
  }
  
  .container {
    position: relative;
    z-index: 1;
  }
  
  .trust-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto $spacing-3xl;
    
    .section-subtitle {
      color: $dark-gray;
      font-size: $font-size-lg;
      margin-top: $spacing-md;
    }
  }
  
  .trust-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-xl;
    margin-bottom: $spacing-3xl;
    
    .trust-feature {
      background-color: $light;
      border-radius: $border-radius-lg;
      padding: $spacing-xl;
      text-align: center;
      box-shadow: $shadow-sm;
      transition: transform $transition-normal, box-shadow $transition-normal;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: $shadow-md;
      }
      
      .feature-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto $spacing-lg;
        background-color: rgba($primary, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        color: $primary;
      }
      
      h3 {
        font-size: $font-size-lg;
        margin-bottom: $spacing-md;
        color: $text;
      }
      
      p {
        color: $dark-gray;
        line-height: 1.6;
      }
    }
  }
  
  .compliance-badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: $spacing-xl;
    margin-bottom: $spacing-3xl;
    
    .compliance-badge {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: $spacing-sm $spacing-lg;
      background-color: $light;
      border-radius: $border-radius-md;
      font-weight: 500;
      
      svg {
        color: $secondary;
      }
    }
  }
  
  .trust-quote {
    max-width: 800px;
    margin: 0 auto;
    padding: $spacing-2xl;
    background-color: $light;
    border-radius: $border-radius-lg;
    position: relative;
    box-shadow: $shadow-md;
    
    .quote-mark {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 36px;
      color: rgba($primary, 0.2);
    }
    
    blockquote {
      margin: 0 0 $spacing-xl;
      padding: $spacing-lg 0 0 $spacing-xl;
      font-size: $font-size-lg;
      line-height: 1.7;
      color: $text;
      font-style: italic;
    }
    
    .quote-author {
      display: flex;
      align-items: center;
      
      .author-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: $spacing-md;
      }
      
      .author-info {
        h4 {
          font-size: $font-size-base;
          margin-bottom: 4px;
        }
        
        p {
          color: $dark-gray;
          font-size: $font-size-xs;
        }
      }
    }
  }
  
  @media (max-width: $breakpoint-md) {
    .trust-quote {
      padding: $spacing-xl;
    }
  }
}
</style>