import { createI18n } from "vue-i18n";

// Importar manualmente los archivos de idioma
import ptBR from "./locales/pt-BR.json";
import es from "./locales/es.json";
import en from "./locales/en.json";

// Tipo para las opciones de idioma
type LanguageOption = {
  value: string;
  label: string;
  flag?: string;
};

// Definir idiomas disponibles
export const availableLanguages: LanguageOption[] = [
  { value: "pt-BR", label: "Português (Brasil)" },
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];

// Tipo para las locales disponibles
type LocaleType = "pt-BR" | "es" | "en";

// Crear instancia i18n con mensajes predefinidos
const i18n = createI18n({
  legacy: false, // Usar Composition API
  locale: "pt-BR" as LocaleType,
  fallbackLocale: "pt-BR" as LocaleType,
  messages: {
    "pt-BR": ptBR,
    es: es,
    en: en,
  },
  missingWarn: false,
  fallbackWarn: false,
});

// Función para cambiar el idioma
export function setLanguage(lang: string): void {
  if (lang === "pt-BR" || lang === "es" || lang === "en") {
    i18n.global.locale.value = lang as LocaleType;
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("lang", lang);
  }
}

// Inicializar el idioma desde localStorage si existe
const savedLanguage = localStorage.getItem("language");
if (savedLanguage && ["pt-BR", "es", "en"].includes(savedLanguage)) {
  setLanguage(savedLanguage);
}

export default i18n;
