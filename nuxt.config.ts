import { fileURLToPath } from "url";

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  alias: {
    "@config": fileURLToPath(new URL("./config", import.meta.url)),
    "@tests": fileURLToPath(new URL("./tests", import.meta.url)),
    "@modules": fileURLToPath(new URL("./modules", import.meta.url)),
  },

  build: { transpile: ["@fortawesome"] },
  compatibilityDate: "2025-02-01",
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/styles/scss/main.scss",
  ],
  devtools: {
    enabled: true,
  },
  experimental: {
    renderJsonPayloads: false,
    buildCache: false,
  },
  future: {
    typescriptBundlerResolution: true,
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-og-image",
    "nuxt-schema-org",
    "nuxt-site-config",
  ],
  i18n: {
    vueI18n: "../modules/i18n/i18n.config.ts",
    defaultLocale: "fr",
    locales: [
      {
        code: "fr",
        language: "fr-FR",
      },
    ],
    strategy: "no_prefix",
    compilation: {
      strictMessage: false,
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  ogImage: {
    enabled: process.env.NODE_ENV !== "test",
  },
  plugins: [
    {
      src: "~/plugins/bootstrap.ts",
      mode: "client",
    },
  ],
  runtimeConfig: {
    public: {
      email: "",
      phoneNumber: "",
      address: "",
    },
  },
  test: false,
  typescript: {
    shim: true,
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ["vitest/globals"],
        strictPropertyInitialization: false,
        esModuleInterop: true,
        module: "ESNext",
        moduleResolution: "Node",
        allowSyntheticDefaultImports: true,
        resolveJsonModule: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        noUncheckedIndexedAccess: false,
      },
      include: ["../tests"],
    },
    typeCheck: true,
  },
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: { experimentalDecorators: true },
      },
    },
  },
});