<template>
  <button 
    :class="[
      'btn', 
      `btn-${variant}`, 
      size === 'small' ? 'btn-small' : '', 
      rounded ? 'btn-rounded' : '',
      withIcon ? 'with-icon' : '',
      { 'full-width': fullWidth }
    ]"
    :type="buttonType"
    @click="$emit('click')"
  >
    <font-awesome-icon v-if="icon" :icon="['fas', icon]" class="btn-icon" />
    <span>{{ text }}</span>
    <div v-if="withIcon" class="icon-container">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faArrowRight);

export default defineComponent({
  name: 'CtaButton',
  components: {
    FontAwesomeIcon
  },
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'tertiary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (value: string) => ['small', 'normal', 'large'].includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String,
      default: 'button'
    }
  },
  emits: ['click']
});
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: $spacing-md $spacing-xl;
  border-radius: $border-radius-md;
  border: none;
  cursor: pointer;
  transition: all $transition-normal;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transition: left 0.8s ease-in-out;
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &.with-icon {
    padding-right: calc(#{$spacing-xl} + 24px);
  }
  
  &-primary {
    background-color: $primary;
    color: white;
    
    &:hover {
      background-color: darken($primary, 8%);
      box-shadow: 0 4px 12px rgba($primary, 0.4);
    }
    
    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 8px rgba($primary, 0.3);
    }
  }
  
  &-secondary {
    background-color: white;
    color: $text;
    border: 1px solid $gray;
    
    &:hover {
      background-color: $light-gray;
      border-color: darken($gray, 5%);
    }
    
    &:active {
      transform: translateY(1px);
    }
    
    .icon-container {
      background-color: $light-gray;
    }
  }
  
  &-tertiary {
    background-color: $secondary;
    color: white;
    
    &:hover {
      background-color: darken($secondary, 8%);
      box-shadow: 0 4px 12px rgba($secondary, 0.4);
    }
    
    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 8px rgba($secondary, 0.3);
    }
  }
  
  &-outline {
    background-color: transparent;
    color: $primary;
    border: 2px solid $primary;
    
    &:hover {
      background-color: rgba($primary, 0.1);
    }
    
    .icon-container {
      background-color: $primary;
      color: white;
    }
  }
  
  &-small {
    padding: $spacing-sm $spacing-lg;
    font-size: 0.9rem;
    
    &.with-icon {
      padding-right: calc(#{$spacing-lg} + 18px);
    }
    
    .icon-container {
      width: 18px;
      height: 18px;
      font-size: 0.7rem;
    }
  }
  
  &-rounded {
    border-radius: $border-radius-full;
  }
  
  .btn-icon {
    margin-right: $spacing-sm;
  }
  
  .icon-container {
    position: absolute;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    transition: transform $transition-normal;
  }
  
  &:hover .icon-container {
    transform: translateX(3px);
  }
  
  &.full-width {
    width: 100%;
  }
}
</style>