<template>
    <section id="pricing" class="pricing section">
      <div class="container">
        <h2 class="section-title">{{ $t('pricing.title') }}</h2>
        <p class="section-subtitle">{{ $t('pricing.subtitle') }}</p>
        
        <div class="free-plan-banner">
          <div class="sparkle sparkle-1"></div>
          <div class="sparkle sparkle-2"></div>
          <div class="sparkle sparkle-3"></div>
          <div class="sparkle sparkle-4"></div>
          <div class="free-plan-icon">✨</div>
          <p class="free-plan-text">
            <span class="highlight">{{ $t('pricing.freePlan.intro') }}</span> {{ $t('pricing.freePlan.message') }}
            <span class="highlight glow">{{ $t('pricing.freePlan.highlight') }}</span> {{ $t('pricing.freePlan.ending') }}
          </p>
          <div class="ribbon">
            <span>{{ $t('pricing.freePlan.ribbon') || 'NEW' }}</span>
          </div>
        </div>
        
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
          'pt-BR': { currency: '$', basic: 80, crecimiento: 120, expansion: 250, premium: 500 },
          'es': { currency: '$', basic: 80, crecimiento: 120, expansion: 250, premium: 500 },
          'en': { currency: '$', basic: 80, crecimiento: 120, expansion: 250, premium: 500 }
        };
        
        const currentLocale = locale.value as keyof typeof prices;
        const currentPrices = prices[currentLocale] || prices['pt-BR'];

        // Definir los rangos y nombres de planes según el idioma
        const planInfo = {
          'pt-BR': {
            basic: { title: 'Plano Básico', range: '21 - 80 Membros' },
            crecimiento: { title: 'Plano Crescimento', range: '81 - 200 Membros' },
            expansion: { title: 'Plano Expansão', range: '201 - 400 Membros' },
            premium: { title: 'Plano Premium', range: '401+ Membros' }
          },
          'es': {
            basic: { title: 'Plan Básico', range: '21 - 80 Miembros' },
            crecimiento: { title: 'Plan Crecimiento', range: '81 - 200 Miembros' },
            expansion: { title: 'Plan Expansión', range: '201 - 400 Miembros' },
            premium: { title: 'Plan Premium', range: '401+ Miembros' }
          },
          'en': {
            basic: { title: 'Basic Plan', range: '21 - 80 Members' },
            crecimiento: { title: 'Growth Plan', range: '81 - 200 Members' },
            expansion: { title: 'Expansion Plan', range: '201 - 400 Members' },
            premium: { title: 'Premium Plan', range: '401+ Members' }
          }
        };

        // Definir las características según el idioma
        const featureInfo = {
          'pt-BR': {
            basic: [
              "📧 Suporte via email 7/7",
              "🎬 Acesso a vídeos tutoriais"
            ],
            crecimiento: [
              "📱 Suporte via WhatsApp 24/7",
              "📚 Materiais de ajuda avançados"
            ],
            expansion: [
              "📞 Suporte telefônico 12/7",
              "🔖 Prioridade na resolução de tickets",
              "☎️ Suporte telefônico VIP 24/7",
              "💬 Consultoria na configuração de contas"
            ],
            premium: [
              "⚡ Possibilidade de solicitar funcionalidades específicas para sua igreja",
              "🚀 Consultoria especializada"
            ]
          },
          'es': {
            basic: [
              "📧 Soporte por email 7/7",
              "🎬 Acceso a videos tutoriales"
            ],
            crecimiento: [
              "📱 Soporte vía WhatsApp 24/7",
              "📚 Materiales de ayuda avanzados"
            ],
            expansion: [
              "📞 Soporte telefónico 12/7",
              "🔖 Prioridad en resolución de tickets",
              "☎️ Soporte telefónico VIP 24/7",
              "💬 Asesoría en configuración de cuentas"
            ],
            premium: [
              "⚡ Posibilidad de solicitar funcionalidades específicas para su iglesia",
              "🚀 Asesoría especializada"
            ]
          },
          'en': {
            basic: [
              "📧 Email support 7/7",
              "🎬 Access to tutorial videos"
            ],
            crecimiento: [
              "📱 WhatsApp support 24/7",
              "📚 Advanced help materials"
            ],
            expansion: [
              "📞 Phone support 12/7",
              "🔖 Priority ticket resolution",
              "☎️ VIP phone support 24/7",
              "💬 Account configuration advisory"
            ],
            premium: [
              "⚡ Possibility to request specific features for your church",
              "🚀 Specialized advisory"
            ]
          }
        };

        const currentInfo = planInfo[currentLocale] || planInfo['pt-BR'];
        const currentFeatures = featureInfo[currentLocale] || featureInfo['pt-BR'];
        
        return [
          {
            id: 1,
            title: currentInfo.basic.title,
            price: currentPrices.basic,
            currency: currentPrices.currency,
            period: t('pricing.period') || '/mes',
            description: currentInfo.basic.range,
            features: currentFeatures.basic,
            buttonText: t('pricing.buttonText') || 'Select Plan',
            popular: false
          },
          {
            id: 2,
            title: currentInfo.crecimiento.title,
            price: currentPrices.crecimiento,
            currency: currentPrices.currency,
            period: t('pricing.period') || '/mes',
            description: currentInfo.crecimiento.range,
            features: currentFeatures.crecimiento,
            buttonText: t('pricing.buttonText') || 'Select Plan',
            popular: true
          },
          {
            id: 3,
            title: currentInfo.expansion.title,
            price: currentPrices.expansion,
            currency: currentPrices.currency,
            period: t('pricing.period') || '/mes',
            description: currentInfo.expansion.range,
            features: currentFeatures.expansion,
            buttonText: t('pricing.buttonText') || 'Select Plan',
            popular: false
          },
          {
            id: 4,
            title: currentInfo.premium.title,
            price: currentPrices.premium,
            currency: currentPrices.currency,
            period: t('pricing.period') || '/mes',
            description: currentInfo.premium.range,
            features: currentFeatures.premium,
            buttonText: t('pricing.buttonText') || 'Select Plan',
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
        handleSelectPlan,
        locale
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .pricing {
    background-color: #f7fafc;
    position: relative;
    overflow: hidden;
    padding: 80px 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(#4a5568, 0.02) 0%, rgba(#a0aec0, 0.05) 100%);
      z-index: 0;
    }
    
    .container {
      position: relative;
      z-index: 2;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section-title {
      color: #2d3748;
      position: relative;
      font-size: 36px;
      text-align: center;
      margin-bottom: 15px;
      font-weight: 700;
      
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(to right, #6b46c1, #805ad5);
        margin: 20px auto 0;
        border-radius: 100px;
      }
    }
    
    .section-subtitle {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px;
      color: #718096;
      font-size: 18px;
      line-height: 1.6;
    }
    
    &-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin: 0 auto;
    }
    
    @media (min-width: 1200px) {
      &-cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto;
        
        /* Añadir una pequeña animación al cargar */
        & > * {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      }
      
      /* Plan Crecimiento es más destacado (popular) */
      &-cards > :nth-child(2) {
        transform: translateY(-15px);
        z-index: 2;
      }
    }
    
    @media (min-width: 768px) and (max-width: 1199px) {
      &-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
    }
    
    @media (max-width: 767px) {
      padding: 60px 0;
      
      &-cards {
        grid-template-columns: 1fr;
        max-width: 350px;
        margin: 0 auto;
      }
      
      .section-title {
        font-size: 30px;
      }
      
      .section-subtitle {
        font-size: 16px;
        margin-bottom: 40px;
      }
    }
    
    .free-plan-banner {
      background: linear-gradient(135deg, #6b46c1 0%, #805ad5 100%);
      border-radius: 12px;
      padding: 20px 30px;
      margin: 0 auto 50px;
      display: flex;
      align-items: center;
      gap: 15px;
      max-width: 900px;
      box-shadow: 0 15px 30px rgba(107, 70, 193, 0.3);
      transform: translateY(-5px);
      position: relative;
      overflow: hidden;
      animation: pulse 3s infinite;
      
      @keyframes pulse {
        0% { box-shadow: 0 15px 30px rgba(107, 70, 193, 0.3); }
        50% { box-shadow: 0 20px 40px rgba(107, 70, 193, 0.5); }
        100% { box-shadow: 0 15px 30px rgba(107, 70, 193, 0.3); }
      }
      
      .sparkle {
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        opacity: 0.6;
        
        &::before, &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
        }
        
        &::before {
          transform: rotate(45deg);
        }
        
        &::after {
          transform: rotate(90deg);
        }
        
        &-1 {
          top: 20%;
          left: 10%;
          animation: sparkleAnim 4s infinite;
        }
        
        &-2 {
          top: 60%;
          left: 15%;
          animation: sparkleAnim 5s infinite 1s;
          transform: scale(0.6);
        }
        
        &-3 {
          top: 20%;
          right: 15%;
          animation: sparkleAnim 6s infinite 2s;
          transform: scale(0.8);
        }
        
        &-4 {
          top: 70%;
          right: 10%;
          animation: sparkleAnim 3s infinite 1.5s;
          transform: scale(0.7);
        }
        
        @keyframes sparkleAnim {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }
      }
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        opacity: 0.5;
      }
      
      .free-plan-icon {
        font-size: 36px;
        flex-shrink: 0;
        animation: iconPulse 2s infinite;
        
        @keyframes iconPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      }
      
      .free-plan-text {
        color: white;
        font-size: 18px;
        line-height: 1.5;
        margin: 0;
        font-weight: 500;
        text-align: center;
        flex: 1;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        
        .highlight {
          font-weight: 700;
          color: #faf089;
          
          &.glow {
            position: relative;
            display: inline-block;
            animation: textGlow 2s infinite;
            padding: 0 5px;
            
            @keyframes textGlow {
              0% { text-shadow: 0 0 5px #faf089, 0 0 10px #faf089; }
              50% { text-shadow: 0 0 10px #faf089, 0 0 20px #faf089; }
              100% { text-shadow: 0 0 5px #faf089, 0 0 10px #faf089; }
            }
          }
        }
      }
      
      .ribbon {
        position: absolute;
        top: 0;
        right: 30px;
        transform: translateY(-30%);
        
        span {
          position: relative;
          display: block;
          text-align: center;
          background-color: #ffdd57;
          color: #805ad5;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          padding: 7px 10px;
          width: 60px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.1);
          transform: rotate(5deg);
          
          &::before, &::after {
            content: '';
            position: absolute;
            top: 100%;
            width: 0;
            height: 0;
          }
          
          &::before {
            left: 0;
            border-top: 5px solid #b9a440;
            border-left: 5px solid transparent;
          }
          
          &::after {
            right: 0;
            border-top: 5px solid #b9a440;
            border-right: 5px solid transparent;
          }
        }
      }
    }
    
    @media (max-width: 768px) {
      .free-plan-banner {
        flex-direction: column;
        padding: 20px;
        
        .free-plan-icon {
          margin-bottom: 10px;
        }
        
        .free-plan-text {
          font-size: 16px;
        }
        
        .ribbon {
          right: 20px;
        }
        
        .sparkle-1, .sparkle-3 {
          display: none;
        }
      }
    }
  }
  </style>