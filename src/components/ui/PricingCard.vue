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
        <span class="currency">{{ plan.currency || '$' }}</span>
        <span class="amount">{{ plan.price }}</span>
        <span class="period">{{ plan.period || $t('pricing.period') }}</span>
      </div>
    </div>
    
    <div class="feature-list">
      <ul>
        <li v-for="(feature, index) in plan.features" :key="index">
          <div class="check-circle">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#10B981" />
              <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span v-if="typeof feature === 'string'">{{ feature }}</span>
          <span v-else>{{ feature }}</span>
        </li>
      </ul>
    </div>
    
    <div class="card-footer">
      <button 
        class="select-button"
        :class="{ 'primary': plan.popular, 'secondary': !plan.popular }"
        @click="$emit('select-plan', plan.id)"
      >
        {{ plan.buttonText || $t('pricing.buttonText') }}
      </button>
      <p class="guarantee" v-if="plan.popular">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L10.2 5.2L16 6.1L12 10.2L13 16L8 13.2L3 16L4 10.2L0 6.1L5.8 5.2L8 0Z" fill="#6B46C1" opacity="0.5" />
        </svg>
        {{ $t('pricing.guarantee') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faCheckCircle, faShieldAlt);

export default defineComponent({
  name: 'PricingCard',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  props: {
    plan: {
      type: Object as any,
      required: true
    }
  },
  emits: ['select-plan']
});
</script>

<style lang="scss" scoped>
.pricing-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #edf2f7;
  margin: 0px auto;
  width: 100%;
  max-width: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  &.is-popular {
    border: 2px solid $primary;
    box-shadow: 0 8px 30px rgba($primary, 0.2);
    z-index: 2;
    transform: scale(1.02);
  }
  
  .popular-badge {
    position: absolute;
    top: 0;
    right: 20px;
    background-color: $primary;
    color: white;
    padding: 8px 16px;
    border-radius: 0 0 8px 8px;
    font-weight: 600;
    font-size: 14px;
    z-index: 1;
  }
  
  .card-header {
    padding: 30px 20px 15px;
    text-align: center;
    
    h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #2d3748;
    }
    
    .card-description {
      color: #718096;
      font-size: 16px;
      font-weight: 500;
    }
  }
  
  .price-container {
    padding: 15px 20px 20px;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid #edf2f7;
    
    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      
      .currency {
        font-size: 24px;
        font-weight: 700;
        color: #4a5568;
        line-height: 1;
      }
      
      .amount {
        font-size: 48px;
        font-weight: 800;
        color: $primary;
        line-height: 1;
      }
      
      .period {
        color: #718096;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        align-self: flex-end;
      }
    }
  }
  
  .feature-list {
    padding: 25px 20px;
    flex: 1;
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
        color: #4a5568;
        font-size: 15px;
        line-height: 1.5;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        .check-circle {
          margin-right: 10px;
          flex-shrink: 0;
          margin-top: 1px;
        }
      }
    }
  }
  
  .card-footer {
    padding: 20px;
    text-align: center;
    margin-top: auto;
    
    .select-button {
      width: 100%;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      font-family: inherit;
      font-size: 16px;
      background-color: $primary;
      color: white;
      
      &:hover {
        background-color: darken($primary, 8%);
        box-shadow: 0 4px 12px rgba($primary, 0.4);
      }
      
      &.primary {
        background-color: $primary;
        color: white;
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba($primary, 0.4);
        
        &:hover {
          background-color: darken($primary, 8%);
          box-shadow: 0 4px 20px rgba($primary, 0.5);
          transform: scale(1.08);
        }
      }
      
      &.secondary {
        &:hover {
          background-color: darken($primary, 8%);
          box-shadow: 0 4px 12px rgba($primary, 0.4);
        }
      }
    }
    
    .guarantee {
      margin-top: 12px;
      font-size: 14px;
      color: #718096;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
  }
}
</style>