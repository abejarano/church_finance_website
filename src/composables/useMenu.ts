import { ref } from 'vue';

export interface MenuItem {
  id: number;
  label: string;
  href: string;
}

export function useMenu() {
  const isMenuOpen = ref(false);
  
  const menuItems: MenuItem[] = [
    { id: 1, label: 'Características', href: '#features' },
    { id: 2, label: 'Beneficios', href: '#benefits' },
    { id: 3, label: 'Precios', href: '#pricing' },
    { id: 4, label: 'Contacto', href: '#contact' }
  ];
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  const closeMenu = () => {
    isMenuOpen.value = false;
  };
  
  return {
    isMenuOpen,
    menuItems,
    toggleMenu,
    closeMenu
  };
}