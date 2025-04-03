<template>
    <div class="pricing-card" :class="{ popular: plan.popular }">
      <div v-if="plan.popular" class="popular-tag">{{ $t('pricing.popularTag') }}</div>
      <h3>{{ plan.title }}</h3>
      <div class="price">
        {{ plan.currency || 'R$' }}{{ plan.price }}<span>{{ plan.period || '/mês' }}</span>
      </div>
      <p>{{ plan.description }}</p>
      <ul>
        <li v-for="(feature, index) in plan.features" :key="index">
          <font-awesome-icon :icon="['fas', 'check']" />
          <span v-if="typeof feature === 'string'">{{ feature }}</span>
          <span v-else>{{ feature.static || feature }}</span>
        </li>
      </ul>
      <CtaButton 
        :text="plan.buttonText || $t('pricing.defaultButton')" 
        variant="primary" 
        @click="$emit('select-plan', plan.id)"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { PricingPlan } from '@/types';
  import CtaButton from '@/components/common/CtaButton.vue';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  // Add icons to library
  library.add(faCheck);
  
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
    background-color: $background;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    text-align: center;
    transition: transform $transition-normal, box-shadow $transition-normal;
    position: relative;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: $shadow-lg;
    }
    
    &.popular {
      border: 2px solid $primary;
    }
    
    .popular-tag {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background-color: $primary;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    h3 {
      font-size: $font-size-xl;
      margin-bottom: $spacing-sm;
    }
    
    .price {
      font-size: 3rem;
      font-weight: 700;
      color: $primary;
      margin: $spacing-lg 0;
      
      span {
        font-size: 1rem;
        color: $dark-gray;
      }
    }
    
    p {
      color: $dark-gray;
      margin-bottom: $spacing-lg;
    }
    
    ul {
      list-style: none;
      margin: $spacing-xl 0;
      text-align: left;
      
      li {
        margin-bottom: $spacing-md;
        display: flex;
        align-items: center;
        
        svg {
          color: $primary;
          margin-right: $spacing-sm;
        }
      }
    }
  }
  </style>