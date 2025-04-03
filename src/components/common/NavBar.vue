<template>
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/logoHorizontal.png" alt="Gloria Finance Logo" class="logo-img" />
          
        </div>
        <div class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.href" @click.prevent="scrollToSection(item.href)">{{ item.label }}</a>
          </li>
          <li>
            <LanguageSelector />
          </li>
          <li>
            <CtaButton :text="loginText" size="small" />
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CtaButton from './CtaButton.vue';
  import LanguageSelector from './LanguageSelector.vue';
  
  const { t, locale } = useI18n();
  const isMenuOpen = ref(false);
  
  // Usar computed para que los items del menú se actualicen cuando cambie el idioma
  const menuItems = computed(() => [
    { id: 1, label: t('navbar.features'), href: '#features' },
    { id: 2, label: t('navbar.benefits'), href: '#benefits' },
    { id: 3, label: t('navbar.pricing'), href: '#pricing' },
    { id: 4, label: t('navbar.contact'), href: '#contact' }
  ]);
  
  // Texto del botón de inicio de sesión
  const loginText = computed(() => t('navbar.login'));
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  
  const scrollToSection = (href: string) => {
    closeMenu();
    const targetId = href.substring(1); // Eliminar el # del href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajuste para compensar la altura del navbar
        behavior: 'smooth'
      });
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .header {
    background-color: $light;
    box-shadow: $shadow-sm;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $spacing-lg;
    }
    
    .logo {
      display: flex;
      align-items: center;
      
      .logo-img {
        width: 280px;
        margin-right: $spacing-sm;
      }
      
      h1 {
        font-size: 24px;
        font-weight: 700;
        color: $text;
      }
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
      
      li {
        margin-left: $spacing-xl;
        
        a {
          text-decoration: none;
          color: $text;
          font-weight: 500;
          transition: color $transition-normal;
          cursor: pointer;
          
          &:hover {
            color: $primary;
          }
        }
      }
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;
      
      span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: $text;
        border-radius: 3px;
      }
    }
    
    @media (max-width: $breakpoint-md) {
      .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: $light;
        padding: $spacing-lg;
        box-shadow: $shadow-sm;
        
        &.active {
          display: block;
        }
        
        li {
          margin: 0 0 $spacing-md 0;
        }
      }
      
      .menu-toggle {
        display: flex;
      }
    }
  }
  </style>