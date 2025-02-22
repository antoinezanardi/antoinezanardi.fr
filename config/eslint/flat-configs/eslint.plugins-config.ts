import type { Linter } from "eslint";

const ESLINT_PLUGINS_CONFIG = {
  name: "plugins",
  files: ["app/plugins/**/*.ts"],
  rules: { "import/no-default-export": "off" },
} satisfies Linter.Config;

export { ESLINT_PLUGINS_CONFIG };