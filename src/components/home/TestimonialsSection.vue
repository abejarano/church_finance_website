<template>
    <section id="testimonials" class="testimonials section">
      <GradientBackground>
        <div class="container">
          <h2 class="section-title">{{ $t('testimonials.title') }}</h2>
          <div class="testimonials-slider">
            <transition name="fade" mode="out-in">
              <TestimonialCard 
                :key="currentTestimonial" 
                :testimonial="testimonials[currentTestimonial]" 
              />
            </transition>
            <div class="slider-controls">
              <div 
                v-for="(_, index) in testimonials.length" 
                :key="index" 
                class="slider-dot" 
                :class="{ active: currentTestimonial === index }"
                @click="currentTestimonial = index"
              ></div>
            </div>
          </div>
        </div>
      </GradientBackground>
    </section>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import TestimonialCard from '@/components/ui/TestimonialCard.vue';
import GradientBackground from '@/components/common/GradientBackground.vue';

export default defineComponent({
  name: 'TestimonialsSection',
  components: {
    TestimonialCard,
    GradientBackground
  },
  setup() {
    const { t } = useI18n();
    const currentTestimonial = ref(0);
    
    // Usar computed para que los testimonios se actualicen cuando cambie el idioma
    const testimonials = computed(() => [
      {
        id: 1,
        text: t('testimonials.testimonial1.text'),
        author: {
          name: t('testimonials.testimonial1.author'),
          position: 'Pastor Principal',
          church: t('testimonials.testimonial1.church'),
          image: "testimonial1.jpg"
        }
      },
      {
        id: 2,
        text: t('testimonials.testimonial2.text'),
        author: {
          name: t('testimonials.testimonial2.author'),
          position: 'Tesorera',
          church: t('testimonials.testimonial2.church'),
          image: "testimonial2.jpg"
        }
      },
      {
        id: 3,
        text: t('testimonials.testimonial3.text'),
        author: {
          name: t('testimonials.testimonial3.author'),
          position: 'Pastor Principal',
          church: t('testimonials.testimonial3.church'),
          image: "testimonial3.jpg"
        }
      }
    ]);
    
    let interval: number | null = null;
    
    const startAutoSlide = () => {
      interval = window.setInterval(() => {
        currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
      }, 5000);
    };
    
    onMounted(() => {
      startAutoSlide();
    });
    
    onBeforeUnmount(() => {
      if (interval) {
        clearInterval(interval);
      }
    });
    
    return {
      currentTestimonial,
      testimonials
    };
  }
});
</script>
  
<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/functions" as *;

.testimonials {
  position: relative;
  text-align: center;
  color: $light;
  
  .container {
    position: relative;
    padding: $spacing-3xl 0;
  }
  
  .section-title {
    color: $light;
    position: relative;
    margin-bottom: $spacing-3xl;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background-color: $accent;
      margin: $spacing-md auto 0;
      border-radius: $border-radius-full;
    }
  }
  
  &-slider {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: $spacing-xl;
    background-color: rgba($light, 0.05);
    border-radius: $border-radius-lg;
    backdrop-filter: blur(10px);
  }
  
  .slider-controls {
    display: flex;
    justify-content: center;
    margin-top: $spacing-xl;
    gap: $spacing-xs;
  }
  
  .slider-dot {
    width: 12px;
    height: 12px;
    background-color: rgba($light, 0.2);
    border-radius: 50%;
    cursor: pointer;
    transition: all $transition-normal;
    
    &.active {
      background-color: $accent;
      transform: scale(1.2);
    }
    
    &:hover:not(.active) {
      background-color: rgba($light, 0.4);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>