<template>
    <div class="home">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <TrustSection />
      <CtaSection />
      <ContactSection />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeroSection from '@/components/home/HeroSection.vue';
  import FeaturesSection from '@/components/home/FeaturesSection.vue';
  import BenefitsSection from '@/components/home/BenefitsSection.vue';
  import TestimonialsSection from '@/components/home/TestimonialsSection.vue';
  import PricingSection from '@/components/home/PricingSection.vue';
  import TrustSection from '@/components/home/TrustSection.vue';
  import CtaSection from '@/components/home/CtaSection.vue';
  import ContactSection from '@/components/home/ContactSection.vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      HeroSection,
      FeaturesSection,
      BenefitsSection,
      TestimonialsSection,
      PricingSection,
      TrustSection,
      CtaSection,
      ContactSection
    }
  });
  </script>