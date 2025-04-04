<template>
  <div class="language-selector">
    <div class="select-wrapper">
      <div class="current-language" @click="toggleDropdown">
        <span class="flag">{{ getCurrentFlag }}</span>
        <span class="language-name">{{ getCurrentLanguageName }}</span>
        <span class="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      
      <div class="language-dropdown" v-if="isOpen">
        <div 
          v-for="lang in availableLanguages" 
          :key="lang.value" 
          class="language-option" 
          :class="{ active: currentLanguage === lang.value }"
          @click="selectLanguage(lang.value)"
        >
          <span class="flag">{{ lang.flag }}</span>
          <span class="language-name">{{ lang.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { availableLanguages, setLanguage } from "@/i18n";

const i18n = useI18n();
const currentLanguage = ref(i18n.locale.value);
const isOpen = ref(false);

// Obtener el nombre del idioma actual
const getCurrentLanguageName = computed(() => {
  const current = availableLanguages.find(lang => lang.value === currentLanguage.value);
  return current?.label || '';
});

// Obtener la bandera del idioma actual
const getCurrentFlag = computed(() => {
  const current = availableLanguages.find(lang => lang.value === currentLanguage.value);
  return current?.flag || '';
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLanguage(lang: string) {
  currentLanguage.value = lang;
  setLanguage(lang as any);
  isOpen.value = false;
}

// Cerrar el menú cuando se hace clic fuera del selector
function handleClickOutside(event: MouseEvent) {
  const selector = document.querySelector('.language-selector');
  if (selector && !selector.contains(event.target as Node) && isOpen.value) {
    isOpen.value = false;
  }
}

onMounted(() => {
  // Asegurar que el idioma del componente coincida con el global
  currentLanguage.value = i18n.locale.value;
  // Agregar evento para cerrar el menú al hacer clic fuera
  document.addEventListener('click', handleClickOutside);
});

// Eliminar evento al desmontar el componente
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.select-wrapper {
  position: relative;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.4rem 0.75rem;
  transition: all 0.2s ease;
  min-width: 8rem;
}

.current-language:hover {
  border-color: rgba(0, 0, 0, 0.3);
  background-color: #f8f8f8;
}

.flag {
  font-size: 1.4rem;
  line-height: 1;
  display: inline-block;
  margin-right: 4px;
}

.language-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;
}

.select-icon {
  margin-left: 8px;
  color: #555;
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  max-height: 200px;
  overflow-y: auto;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.6rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: #333;
  font-size: 0.85rem;
}

.language-option:hover {
  background-color: #f0f0f0;
}

.language-option.active {
  background-color: #e6f0ff;
  font-weight: 600;
  border-left: 3px solid #4a90e2;
}

/* Modo oscuro específico */
.dark-mode .current-language,
:root[data-theme="dark"] .current-language,
.dark-theme .current-language {
  background-color: #502981; /* Color primario púrpura */
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.dark-mode .current-language:hover,
:root[data-theme="dark"] .current-language:hover,
.dark-theme .current-language:hover {
  background-color: #5e309a; /* Versión ligeramente más clara */
  border-color: rgba(255, 255, 255, 0.4);
}

.dark-mode .language-dropdown,
:root[data-theme="dark"] .language-dropdown,
.dark-theme .language-dropdown {
  background-color: #502981; /* Color primario púrpura */
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.dark-mode .language-option,
:root[data-theme="dark"] .language-option,
.dark-theme .language-option {
  color: #ffffff;
}

.dark-mode .language-option:hover,
:root[data-theme="dark"] .language-option:hover,
.dark-theme .language-option:hover {
  background-color: #5e309a; /* Versión ligeramente más clara */
}

.dark-mode .language-option.active,
:root[data-theme="dark"] .language-option.active,
.dark-theme .language-option.active {
  background-color: #422368; /* Versión ligeramente más oscura */
  border-left: 3px solid #8954d4; /* Versión más clara para el borde */
}

/* Mantener compatibilidad con prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  .current-language {
    background-color: #502981; /* Color primario púrpura */
    border-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
  
  .current-language:hover {
    background-color: #5e309a; /* Versión ligeramente más clara */
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  .select-icon {
    color: #cbb0e9; /* Color complementario más claro */
  }
  
  .language-dropdown {
    background-color: #502981; /* Color primario púrpura */
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .language-option {
    color: #ffffff;
  }
  
  .language-option:hover {
    background-color: #5e309a; /* Versión ligeramente más clara */
  }
  
  .language-option.active {
    background-color: #422368; /* Versión ligeramente más oscura */
    border-left: 3px solid #8954d4; /* Versión más clara para el borde */
  }
}
</style>
