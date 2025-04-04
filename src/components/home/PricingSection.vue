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
    background-color: $light-gray;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba($text, 0.02) 0%, rgba($gray, 0.05) 100%);
      z-index: 0;
    }
    
    .container {
      position: relative;
      z-index: 2;
    }
    
    .section-title {
      color: $text;
      position: relative;
      
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(to right, $tertiary, $accent);
        margin: $spacing-md auto 0;
        border-radius: $border-radius-full;
      }
    }
    
    .section-subtitle {
      text-align: center;
      max-width: 700px;
      margin: 0 auto $spacing-xl;
      color: $dark-gray;
      font-size: $font-size-lg;
    }
    
    &-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-xl;
      margin-top: $spacing-2xl;
      position: relative;
    }
    
    &-shape-1 {
      position: absolute;
      top: -80px;
      right: -80px;
      width: 200px;
      height: 200px;
      background-color: rgba($tertiary, 0.08);
      border-radius: 30% 70% 50% 50% / 40% 50% 50% 60%;
      z-index: 1;
    }
    
    &-shape-2 {
      position: absolute;
      bottom: -100px;
      left: -100px;
      width: 250px;
      height: 250px;
      background-color: rgba($secondary, 0.08);
      border-radius: 60% 40% 50% 50% / 50% 50% 50% 50%;
      z-index: 1;
    }
    
    &-pattern {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 60%;
      background: radial-gradient(circle, rgba($accent, 0.03) 1px, transparent 1px);
      background-size: 30px 30px;
      z-index: 1;
      opacity: 0.6;
    }
  }
  </style>