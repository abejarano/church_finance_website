<template>
  <div class="testimonial-card">
    <div class="card-rating">
      <font-awesome-icon :icon="['fas', 'star']" v-for="i in 5" :key="i" />
    </div>
    <div class="card-content">
      <div class="quote-mark">
        <font-awesome-icon :icon="['fas', 'quote-right']" />
      </div>
      <p>"{{ testimonial.text }}"</p>
    </div>
    <div class="card-author">
      <div class="author-image">
        <img :src="getImageUrl(testimonial.author.image)" :alt="testimonial.author.name">
      </div>
      <div class="author-info">
        <h4>{{ testimonial.author.name }}</h4>
        <p>{{ testimonial.author.position }}, <span>{{ testimonial.author.church }}</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Testimonial } from '@/types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faStar, faQuoteRight);

export default defineComponent({
  name: 'TestimonialCard',
  components: {
    FontAwesomeIcon
  },
  props: {
    testimonial: {
      type: Object as PropType<Testimonial>,
      required: true
    }
  },
  setup() {
    const getImageUrl = (image: string) => {
      try {
        return new URL(`../../assets/img/testimonials/${image}`, import.meta.url).href;
      } catch (e) {
        // Fallback to placeholder if image not found
        return 'https://via.placeholder.com/80';
      }
    };
    
    return {
      getImageUrl
    };
  }
});
</script>

<style lang="scss" scoped>
.testimonial-card {
  background-color: $light;
  border-radius: $border-radius-lg;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: $shadow-md;
  transition: transform $transition-normal, box-shadow $transition-normal;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
  
  .card-rating {
    padding: $spacing-md $spacing-xl;
    display: flex;
    gap: 2px;
    
    svg {
      color: #FFCB45;
      font-size: 16px;
    }
  }
  
  .card-content {
    flex: 1;
    padding: 0 $spacing-xl $spacing-xl;
    position: relative;
    
    .quote-mark {
      position: absolute;
      top: 0;
      left: $spacing-xl;
      font-size: 48px;
      color: rgba($primary, 0.1);
      line-height: 1;
    }
    
    p {
      position: relative;
      padding-top: $spacing-md;
      font-size: $font-size-lg;
      line-height: 1.6;
      color: $text;
      font-style: italic;
    }
  }
  
  .card-author {
    padding: $spacing-xl;
    background-color: $light-gray;
    display: flex;
    align-items: center;
    
    .author-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: $spacing-md;
      border: 2px solid white;
      box-shadow: $shadow-sm;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .author-info {
      h4 {
        font-size: $font-size-base;
        font-weight: 600;
        margin-bottom: 4px;
        color: $text;
      }
      
      p {
        font-size: $font-size-xs;
        color: $dark-gray;
        
        span {
          font-weight: 500;
          color: $text;
        }
      }
    }
  }
}
</style>