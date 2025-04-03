<template>
    <div class="testimonial">
      <p>"{{ testimonial.text }}"</p>
      <div class="testimonial-author">
        <img :src="getImageUrl(testimonial.author.image)" :alt="testimonial.author.name">
        <div class="author-info">
          <h4>{{ testimonial.author.name }}</h4>
          <span>{{ testimonial.author.position }}, {{ testimonial.author.church }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Testimonial } from '@/types';
  
  export default defineComponent({
    name: 'TestimonialCard',
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
          return 'https://via.placeholder.com/60';
        }
      };
      
      return {
        getImageUrl
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .testimonial {
    background-color: $light;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    box-shadow: $shadow-md;
    
    p {
      font-size: $font-size-lg;
      font-style: italic;
      margin-bottom: $spacing-lg;
    }
    
    &-author {
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: $spacing-md;
      }
      
      .author-info {
        text-align: left;
        
        h4 {
          font-size: $font-size-base;
          margin-bottom: $spacing-xs;
        }
        
        span {
          color: $dark-gray;
          font-size: 0.9rem;
        }
      }
    }
  }
  </style>