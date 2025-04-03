import { createI18n } from 'vue-i18n';
import ptBR from './locales/pt-BR.json';
import es from './locales/es.json';
import en from './locales/en.json';

// Tipo para las opciones de idioma
type LanguageOption = {
  value: string;
  label: string;
  flag?: string;
};

// Definir idiomas disponibles
export const availableLanguages: LanguageOption[] = [
  { value: 'pt-BR', label: 'Português (Brasil)' },
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' }
];

// Detectar idioma preferido del navegador
function getBrowserLanguage(): string {
  // Idioma predeterminado siempre será portugués brasileño
  return 'pt-BR';
}

// Tipo para las locales disponibles
type LocaleType = 'pt-BR' | 'es' | 'en';

// Crear instancia i18n
const i18n = createI18n({
  legacy: false, // Para composable API
  locale: 'pt-BR' as LocaleType, // Siempre iniciar con portugués
  fallbackLocale: 'pt-BR' as LocaleType,
  messages: {
    'pt-BR': ptBR,
    'es': es,
    'en': en
  },
  // Configuraciones adicionales para evitar problemas con @ en los emails
  missingWarn: false,
  fallbackWarn: false
});

// Función para cambiar el idioma
export function setLanguage(lang: string): void {
  if (lang === 'pt-BR' || lang === 'es' || lang === 'en') {
    i18n.global.locale.value = lang as LocaleType;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
  }
}

export default i18n; 