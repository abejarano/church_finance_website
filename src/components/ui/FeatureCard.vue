<template>
    <div class="feature-card">
      <div class="feature-icon">
        <font-awesome-icon :icon="['fas', feature.icon]" />
      </div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Feature } from '@/types';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { 
    faChartLine, 
    faFileInvoiceDollar, 
    faUsers, 
    faFileAlt, 
    faTasks, 
    faMobileAlt 
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  // Add icons to library
  library.add(faChartLine, faFileInvoiceDollar, faUsers, faFileAlt, faTasks, faMobileAlt);
  
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
    background-color: $gray;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    text-align: center;
    transition: transform $transition-normal, box-shadow $transition-normal;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: $shadow-lg;
    }
    
    .feature-icon {
      width: 70px;
      height: 70px;
      background-color: $primary;
      color: white;
      margin: 0 auto $spacing-lg;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 30px;
    }
    
    h3 {
      font-size: $font-size-xl;
      margin-bottom: $spacing-md;
      color: $primary;
    }
    
    p {
      color: $dark-gray;
    }
  }
  </style>