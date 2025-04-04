<template>
  <div class="feature-card">
    <div class="feature-icon-wrapper">
      <div class="feature-icon">
        <font-awesome-icon :icon="['fas', feature.icon]" />
      </div>
      <div class="feature-icon-bg"></div>
    </div>
    <div class="feature-content">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Feature } from '@/types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faChartLine, 
  faFileInvoiceDollar, 
  faUsers, 
  faFileAlt, 
  faTasks, 
  faMobileAlt,
  faShieldAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(
  faChartLine, 
  faFileInvoiceDollar, 
  faUsers, 
  faFileAlt, 
  faTasks, 
  faMobileAlt,
  faShieldAlt,
  faDatabase
);

export default defineComponent({
  name: 'FeatureCard',
  components: {
    FontAwesomeIcon
  },
  props: {
    feature: {
      type: Object as PropType<Feature>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.feature-card {
  background-color: $light;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  display: flex;
  flex-direction: column;
  transition: all $transition-normal;
  position: relative;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 4px 20px rgba($text, 0.08);
  z-index: 1;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($text, 0.12);
    
    .feature-icon {
      background: linear-gradient(135deg, $primary, $tertiary);
      color: $light;
    }
    
    .card-decoration {
      transform: scale(3) rotate(10deg);
      opacity: 0.1;
    }
  }
  
  .feature-icon-wrapper {
    margin-bottom: $spacing-lg;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    background-color: rgba($accent, 0.1);
    color: $primary;
    border-radius: $border-radius-lg;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    position: relative;
    transition: all $transition-normal;
    margin-bottom: $spacing-md;
  }
  
  .feature-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    
    h3 {
      font-size: $font-size-lg;
      font-weight: 600;
      margin-bottom: $spacing-md;
      color: $text;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        height: 3px;
        width: 40px;
        background-color: $accent;
        border-radius: $border-radius-full;
      }
    }
    
    p {
      color: $dark-gray;
      line-height: 1.6;
    }
  }
  
  .card-decoration {
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 100px;
    height: 100px;
    background-color: $secondary;
    opacity: 0.05;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transition: all 0.6s ease;
    z-index: 1;
  }
}
</style>