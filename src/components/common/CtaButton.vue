<template>
    <button 
      :class="['btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary', size === 'small' ? 'btn-small' : '']"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CtaButton',
    props: {
      text: {
        type: String,
        required: true
      },
      variant: {
        type: String,
        default: 'primary',
        validator: (value: string) => ['primary', 'secondary'].includes(value)
      },
      size: {
        type: String,
        default: 'normal',
        validator: (value: string) => ['small', 'normal'].includes(value)
      }
    },
    emits: ['click']
  });
  </script>
  
  <style lang="scss" scoped>
  .btn {
    font-family: 'Poppins', sans-serif;
    
    &.btn-small {
      padding: $spacing-sm $spacing-lg;
      font-size: 0.9rem;
    }
  }
  </style>