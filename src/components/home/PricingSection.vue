<template>
    <section id="pricing" class="pricing section">
      <div class="container">
        <h2 class="section-title">{{ $t('pricing.title') }}</h2>
        <p class="section-subtitle">{{ $t('pricing.subtitle') }}</p>
        
        <div class="pricing-cards">
          <PricingCard 
            v-for="plan in pricingPlans" 
            :key="plan.id" 
            :plan="plan" 
            @select-plan="handleSelectPlan"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import PricingCard from '@/components/ui/PricingCard.vue';
  import { PricingPlan } from '@/types';
  
  export default defineComponent({
    name: 'PricingSection',
    components: {
      PricingCard
    },
    setup() {
      const { t, locale } = useI18n();
      
      // Definición de características por idioma
      const features = {
        'pt-BR': {
          basic: [
            "Até 100 membros",
            "Relatórios básicos",
            "Suporte por email"
          ],
          standard: [
            "Até 500 membros",
            "Relatórios avançados",
            "Aplicativo móvel",
            "Suporte prioritário"
          ],
          premium: [
            "Membros ilimitados",
            "Todas as funcionalidades",
            "Treinamento dedicado",
            "Suporte 24/7"
          ]
        },
        'es': {
          basic: [
            "Hasta 100 miembros",
            "Informes básicos",
            "Soporte por email"
          ],
          standard: [
            "Hasta 500 miembros",
            "Informes avanzados",
            "Aplicación móvil",
            "Soporte prioritario"
          ],
          premium: [
            "Miembros ilimitados",
            "Todas las funcionalidades",
            "Capacitación dedicada",
            "Soporte 24/7"
          ]
        },
        'en': {
          basic: [
            "Up to 100 members",
            "Basic reports",
            "Email support"
          ],
          standard: [
            "Up to 500 members",
            "Advanced reports",
            "Mobile app",
            "Priority support"
          ],
          premium: [
            "Unlimited members",
            "All features",
            "Dedicated training",
            "24/7 support"
          ]
        }
      };
      
      // Función para obtener características según el idioma actual
      const getLocalizedFeatures = (planType: 'basic' | 'standard' | 'premium') => {
        const currentLocale = locale.value as keyof typeof features;
        return features[currentLocale]?.[planType] || features['pt-BR'][planType];
      };
      
      // Usar computed para que los planes se actualicen automáticamente cuando cambie el idioma
      const pricingPlans = computed(() => {
        // Definir los precios y moneda según el idioma
        const prices = {
          'pt-BR': { currency: 'R$', basic: 199, standard: 349, premium: 599 },
          'es': { currency: 'R$', basic: 199, standard: 349, premium: 599 },
          'en': { currency: '$', basic: 39, standard: 69, premium: 119 }
        };
        
        const currentLocale = locale.value as keyof typeof prices;
        const currentPrices = prices[currentLocale] || prices['pt-BR'];
        
        return [
          {
            id: 1,
            title: t('pricing.basic.title'),
            price: currentPrices.basic,
            currency: currentPrices.currency,
            period: t('pricing.basic.period'),
            description: t('pricing.basic.description'),
            features: getLocalizedFeatures('basic'),
            buttonText: t('pricing.basic.button'),
            popular: false
          },
          {
            id: 2,
            title: t('pricing.standard.title'),
            price: currentPrices.standard,
            currency: currentPrices.currency,
            period: t('pricing.standard.period'),
            description: t('pricing.standard.description'),
            features: getLocalizedFeatures('standard'),
            buttonText: t('pricing.standard.button'),
            popular: true
          },
          {
            id: 3,
            title: t('pricing.premium.title'),
            price: currentPrices.premium,
            currency: currentPrices.currency,
            period: t('pricing.premium.period'),
            description: t('pricing.premium.description'),
            features: getLocalizedFeatures('premium'),
            buttonText: t('pricing.premium.button'),
            popular: false
          }
        ];
      });
      
      const handleSelectPlan = (planId: number) => {
        console.log(`Plan seleccionado: ${planId}`);
        // Aquí podría ir la lógica para redirigir a la página de checkout o registro
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      return {
        pricingPlans,
        handleSelectPlan
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .pricing {
    background-color: $light;
    
    &-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-xl;
      margin-top: $spacing-2xl;
    }
  }
  </style>