import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { Testimonial } from '@/types';

export function useTestimonials(autoSlideInterval = 5000) {
  const currentTestimonial = ref(0);
  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      text: "Gloria Finance ha transformado completamente la administración financiera de nuestra iglesia. El tiempo que ahorramos en tareas administrativas ahora lo invertimos en nuestra comunidad.",
      author: {
        name: "Pastor Roberto Méndez",
        position: "Pastor Principal",
        church: "Iglesia Nueva Vida, São Paulo",
        image: "testimonial1.jpg"
      }
    },
    {
      id: 2,
      text: "La transparencia financiera que nos ha brindado Gloria Finance ha aumentado la confianza de nuestros miembros. Los informes son claros y fáciles de entender para todos.",
      author: {
        name: "Ana Gómez",
        position: "Tesorera",
        church: "Iglesia Emmanuel",
        image: "testimonial2.jpg"
      }
    },
    {
      id: 3,
      text: "Desde que implementamos Gloria Finance, hemos podido hacer un seguimiento detallado de nuestros proyectos sociales. La gestión por centros de costos es realmente útil.",
      author: {
        name: "Pastor Carlos Oliveira",
        position: "Pastor Principal",
        church: "Iglesia del Pueblo, Rio de Janeiro",
        image: "testimonial3.jpg"
      }
    }
  ]);
  
  let interval: number | null = null;
  
  const startAutoSlide = () => {
    interval = window.setInterval(() => {
      currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
    }, autoSlideInterval);
  };
  
  const stopAutoSlide = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };
  
  const goToTestimonial = (index: number) => {
    currentTestimonial.value = index;
    // Reiniciar el intervalo cuando el usuario cambia manualmente
    if (interval) {
      stopAutoSlide();
      startAutoSlide();
    }
  };
  
  const nextTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
    // Reiniciar el intervalo cuando el usuario cambia manualmente
    if (interval) {
      stopAutoSlide();
      startAutoSlide();
    }
  };
  
  const prevTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length;
    // Reiniciar el intervalo cuando el usuario cambia manualmente
    if (interval) {
      stopAutoSlide();
      startAutoSlide();
    }
  };
  
  onMounted(() => {
    startAutoSlide();
  });
  
  onBeforeUnmount(() => {
    stopAutoSlide();
  });
  
  return {
    currentTestimonial,
    testimonials,
    goToTestimonial,
    nextTestimonial,
    prevTestimonial,
    startAutoSlide,
    stopAutoSlide
  };
}