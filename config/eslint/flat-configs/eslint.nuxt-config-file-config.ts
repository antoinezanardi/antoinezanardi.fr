import type { Linter } from "eslint";

const ESLINT_NUXT_CONFIG_FILE_CONFIG = {
  name: "nuxt-config-file",
  files: ["nuxt.config.ts"],

  languageOptions: { globals: { CustomMatchers: "readonly" } },
  rules: {
    camelcase: "off",
  },
} satisfies Linter.Config;

export { ESLINT_NUXT_CONFIG_FILE_CONFIG };