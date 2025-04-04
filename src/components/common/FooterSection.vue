<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-container">
          <div class="footer-column">
            <div class="footer-logo">
              <h2>Gloria Finance</h2>
            </div>
            <p>{{ footerTexts.description }}</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
              <a href="#" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
              <a href="#" aria-label="Twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
              <a href="#" aria-label="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </div>
          </div>
          <div class="footer-column">
            <h4>{{ footerTexts.quickLinks }}</h4>
            <ul class="footer-links">
              <li v-for="link in quickLinks" :key="link.id">
                <a :href="link.url">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>{{ footerTexts.support }}</h4>
            <ul class="footer-links">
              <li v-for="link in supportLinks" :key="link.id">
                <a :href="link.url">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>{{ footerTexts.contact }}</h4>
            <ul class="contact-links">
              <li>
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                <span>{{ footerTexts.address }}</span>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']" />
                <a :href="`tel:${footerTexts.phone}`">{{ footerTexts.phone }}</a>
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <a :href="`mailto:${footerTexts.email}`">{{ footerTexts.email }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>{{ footerTexts.copyright }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
  import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  // Add icons to library
  library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn, faMapMarkerAlt, faPhone, faEnvelope);
  
  export default defineComponent({
    name: 'FooterSection',
    components: {
      FontAwesomeIcon
    },
    setup() {
      const { t } = useI18n();
      const currentYear = computed(() => new Date().getFullYear());
      
      // Textos del footer que se actualizan con el idioma
      const footerTexts = computed(() => ({
        description: t('footer.description'),
        quickLinks: t('footer.quickLinks'),
        support: t('footer.support'),
        contact: t('footer.contact'),
        address: t('footer.address'),
        phone: t('footer.phone'),
        email: t('footer.email'),
        copyright: t('footer.copyright', { year: currentYear.value })
      }));
      
      // Usar computed para que los enlaces se actualicen cuando cambie el idioma
      const quickLinks = computed(() => [
        { id: 1, label: t('navbar.home'), url: '#' },
        { id: 2, label: t('navbar.features'), url: '#features' },
        { id: 3, label: t('navbar.pricing'), url: '#pricing' },
        { id: 4, label: t('navbar.testimonials'), url: '#testimonials' },
        { id: 5, label: t('navbar.contact'), url: '#contact' }
      ]);
      
      const supportLinks = computed(() => [
        { id: 1, label: t('footer.helpCenter'), url: '#' },
        { id: 2, label: t('footer.faq'), url: '#' },
        { id: 3, label: t('footer.privacy'), url: '#' },
        { id: 4, label: t('footer.terms'), url: '#' }
      ]);
      
      return {
        currentYear,
        footerTexts,
        quickLinks,
        supportLinks
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .footer {
    background-color: #1a1a1a;
    color: white;
    padding: $spacing-3xl 0 $spacing-lg;
    
    &-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: $spacing-xl;
      margin-bottom: $spacing-xl;
    }
    
    &-logo {
      display: block;
      margin-bottom: $spacing-lg;
      
      h2 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
    
    &-column {
      p {
        margin-bottom: $spacing-lg;
        color: #bbb;
      }
      
      h4 {
        font-size: 1.2rem;
        margin-bottom: $spacing-lg;
        position: relative;
        padding-bottom: $spacing-sm;
        
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 40px;
          background-color: $primary;
        }
      }
    }
    
    &-links {
      list-style: none;
      
      li {
        margin-bottom: $spacing-sm;
      }
      
      a {
        color: #bbb;
        text-decoration: none;
        transition: color $transition-normal;
        
        &:hover {
          color: white;
        }
      }
    }
    
    .contact-links {
      list-style: none;
      
      li {
        margin-bottom: $spacing-md;
        display: flex;
        align-items: flex-start;
      }
      
      svg {
        color: $primary;
        margin-right: $spacing-md;
        width: 18px;
      }
      
      a {
        color: #bbb;
        text-decoration: none;
        transition: color $transition-normal;
        
        &:hover {
          color: white;
        }
      }
    }
    
    .social-links {
      display: flex;
      gap: $spacing-sm;
      
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        background-color: #333;
        color: white;
        border-radius: 50%;
        transition: background-color $transition-normal;
        
        &:hover {
          background-color: $primary;
        }
      }
    }
    
    &-bottom {
      border-top: 1px solid #333;
      padding-top: $spacing-lg;
      text-align: center;
      font-size: 0.9rem;
      color: #888;
    }
  }
  </style>