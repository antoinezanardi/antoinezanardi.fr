import type { Linter } from "eslint";

const ESLINT_COMPOSABLES_CONFIG = {
  name: "composables",
  files: ["app/composables/**/*.ts"],
  rules: { "max-lines-per-function": "off" },
} satisfies Linter.Config;

export { ESLINT_COMPOSABLES_CONFIG };