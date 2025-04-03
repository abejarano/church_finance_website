<template>
    <section id="contact" class="contact section">
      <div class="container">
        <h2 class="section-title">{{ texts.title }}</h2>
        <div class="contact-container">
          <ContactForm @form-submitted="handleFormSubmit" />
          <div class="contact-info">
            <h3>{{ texts.subtitle }}</h3>
            <p>{{ texts.description }}</p>
            <ul class="contact-links">
              <li>
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                <span>{{ texts.address }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']" />
                <a :href="`tel:${texts.phone}`">{{ texts.phone }}</a>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <a :href="`mailto:${formatEmail(texts.email)}`">{{ formatEmail(texts.email) }}</a>
              </li>
              <li>
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                <a href="https://api.whatsapp.com/send?phone=5511965990791&text=Ol%C3%A1%2C%20t%C3%B4%20precisando%20de%20ajuda%20com%20o%20sistema%20Gloria%20finance">{{ texts.whatsapp }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import ContactForm from '@/components/ui/ContactForm.vue';
  import { ContactFormData } from '@/types';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { computed } from 'vue';
  
  const { t, locale } = useI18n();
  
  // Add icons to library
  library.add(faMapMarkerAlt, faPhone, faEnvelope, faWhatsapp);
  
  // Usar computed para que los textos se actualicen cuando cambie el idioma
  const texts = computed(() => ({
    title: t('contact.title'),
    subtitle: t('contact.subtitle'),
    description: t('contact.description'),
    address: t('contact.address'),
    phone: t('contact.phone'),
    email: t('contact.email'),
    whatsapp: t('contact.whatsapp')
  }));
  
  const handleFormSubmit = (formData: ContactFormData) => {
    console.log('Form submitted:', formData);
    // Aquí podría ir la lógica para enviar los datos del formulario al servidor
    alert(t('Se ha enviado su mensaje correctamente. Nos pondremos en contacto pronto.'));
  };
  
  // Función para convertir el formato escapado "contacto (at) ejemplo.com" a "contacto@ejemplo.com"
  const formatEmail = (email: string): string => {
    return email.replace(' (at) ', '@');
  };
  </script>
  
  <style lang="scss" scoped>
  .contact {
    background-color: $background;
    
    &-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: $spacing-2xl;
    }
    
    &-info {
      padding: $spacing-lg;
      
      h3 {
        font-size: $font-size-xl;
        margin-bottom: $spacing-lg;
      }
      
      p {
        margin-bottom: $spacing-xl;
        color: $dark-gray;
      }
    }
    
    &-links {
      list-style: none;
      
      li {
        margin-bottom: $spacing-lg;
        display: flex;
        align-items: center;
      }
      
      svg {
        color: $primary;
        font-size: 1.5rem;
        margin-right: $spacing-md;
        width: 20px;
      }
      
      a {
        color: $text;
        text-decoration: none;
        transition: color $transition-normal;
        
        &:hover {
          color: $primary;
        }
      }
    }
    
    @media (max-width: $breakpoint-md) {
      &-info {
        order: -1;
      }
    }
  }
  </style>