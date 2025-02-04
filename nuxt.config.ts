import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
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
    compatibilityVersion: 4,
    typescriptBundlerResolution: true,
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/test-utils/module",
    "@nuxt/image",
  ],
  i18n: {
    vueI18n: "./modules/i18n/i18n.config.ts",
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
  nitro: { compressPublicAssets: true },
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
    },
    typeCheck: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    esbuild: {
      tsconfigRaw: {
        compilerOptions: { experimentalDecorators: true },
      },
    },
  },
});