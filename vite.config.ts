import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { dirname, resolve } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**",
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_index.scss" as *;`,
      },
    },
  },
  build: {
    // Asegurarse de que no se excluyan recursos importantes
    assetsInlineLimit: 0,
    rollupOptions: {
      // Preservar el formato de los archivos de mensajes
      preserveEntrySignatures: "strict",
    },
  },
});
