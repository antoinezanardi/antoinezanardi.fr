import type { Linter } from "eslint";

const ESLINT_PAGES_CONFIG = {
  name: "pages",
  files: ["app/pages/**/*.vue"],
  rules: { "vue/multi-word-component-names": "off" },
} satisfies Linter.Config;

export { ESLINT_PAGES_CONFIG };