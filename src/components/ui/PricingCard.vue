<template>
  <div class="pricing-card" :class="{ 'is-popular': plan.popular }">
    <div v-if="plan.popular" class="popular-badge">
      <span>{{ $t('pricing.popularTag') }}</span>
    </div>
    
    <div class="card-header">
      <h3>{{ plan.title }}</h3>
      <p class="card-description">{{ plan.description }}</p>
    </div>
    
    <div class="price-container">
      <div class="price">
        <span class="currency">{{ plan.currency || 'R$' }}</span>
        <span class="amount">{{ plan.price }}</span>
        <span class="period">{{ plan.period || '/mês' }}</span>
      </div>
    </div>
    
    <div class="feature-list">
      <ul>
        <li v-for="(feature, index) in plan.features" :key="index">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'check-circle']" />
          </div>
          <span v-if="typeof feature === 'string'">{{ feature }}</span>
          <span v-else>{{ feature.static || feature }}</span>
        </li>
      </ul>
    </div>
    
    <div class="card-footer">
      <CtaButton 
        :text="plan.buttonText || $t('pricing.defaultButton')" 
        :variant="plan.popular ? 'primary' : 'secondary'" 
        class="full-width"
        @click="$emit('select-plan', plan.id)"
      />
      <p class="guarantee" v-if="plan.popular">
        <font-awesome-icon :icon="['fas', 'shield-alt']" />
        {{ $t('pricing.guarantee') || '7 dias de garantia' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { PricingPlan } from '@/types';
import CtaButton from '@/components/common/CtaButton.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faCheckCircle, faShieldAlt);

export default defineComponent({
  name: 'PricingCard',
  components: {
    CtaButton,
    FontAwesomeIcon
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  props: {
    plan: {
      type: Object as PropType<PricingPlan>,
      required: true
    }
  },
  emits: ['select-plan']
});
</script>

<style lang="scss" scoped>
.pricing-card {
  background-color: $light;
  border-radius: $border-radius-lg;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: transform $transition-normal, box-shadow $transition-normal;
  box-shadow: $shadow-sm;
  border: 1px solid $gray;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
  
  &.is-popular {
    border: 2px solid $primary;
    box-shadow: $shadow-md;
    z-index: 2;
  }
  
  .popular-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: $primary;
    color: white;
    padding: $spacing-xs $spacing-md;
    border-radius: $border-radius-full;
    font-weight: 500;
    font-size: $font-size-xs;
  }
  
  .card-header {
    padding: $spacing-xl;
    text-align: center;
    
    h3 {
      font-size: $font-size-xl;
      font-weight: 600;
      margin-bottom: $spacing-xs;
      color: $text;
    }
    
    .card-description {
      color: $dark-gray;
      font-size: $font-size-base;
    }
  }
  
  .price-container {
    padding: $spacing-md $spacing-xl;
    text-align: center;
    background-color: rgba($light-gray, 0.7);
    
    .price {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 2px;
      
      .currency {
        font-size: $font-size-xl;
        font-weight: 600;
        color: $text;
        align-self: flex-start;
        margin-top: 6px;
      }
      
      .amount {
        font-size: 42px;
        font-weight: 700;
        color: $primary;
        line-height: 1;
      }
      
      .period {
        color: $dark-gray;
        font-size: $font-size-base;
        align-self: flex-end;
        margin-bottom: 8px;
      }
    }
  }
  
  .feature-list {
    padding: $spacing-xl;
    flex: 1;
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: center;
        margin-bottom: $spacing-md;
        
        .feature-icon {
          color: $secondary;
          margin-right: $spacing-sm;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  
  .card-footer {
    padding: $spacing-xl;
    text-align: center;
    
    .full-width {
      width: 100%;
    }
    
    .guarantee {
      margin-top: $spacing-md;
      font-size: $font-size-xs;
      color: $dark-gray;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: $spacing-xs;
    }
  }
}
</style>