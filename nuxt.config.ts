import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import vueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  css: ["~/assets/styles/scss/main.scss"],
  plugins: [{ src: "~/plugins/bootstrap.ts", mode: "client" }],
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: { strictNullChecks: true },
      include: ["../.eslintrc.js"],
    },
  },
  vite: { plugins: [vueI18nVitePlugin({ include: [resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json")] })] },
});