import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import vueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// eslint-disable-next-line no-undef
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
      email: process.env.EMAIL,
      phoneNumber: process.env.PHONE_NUMBER,
      address: process.env.ADDRESS,
    },
  },
  nitro: { compressPublicAssets: true },
  build: { transpile: ["@fortawesome"] },
  vite: { plugins: [vueI18nVitePlugin({ include: [resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json")] })] },
});