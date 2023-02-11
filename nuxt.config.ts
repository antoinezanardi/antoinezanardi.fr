import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import vueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/styles/scss/main.scss",
  ],
  plugins: [{ src: "~/plugins/bootstrap.ts", mode: "client" }],
  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        strictNullChecks: true,
        types: ["vite/client"],
      },
      include: ["../.eslintrc.js"],
    },
  },
  runtimeConfig: {
    public: {
      email: "?",
      phoneNumber: "?",
      address: "?",
    },
  },
  nitro: { compressPublicAssets: true },
  build: { transpile: ["@fortawesome"] },
  vite: { plugins: [vueI18nVitePlugin({ include: [resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json")] })] },
});