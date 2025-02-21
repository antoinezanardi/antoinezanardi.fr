import type { Linter } from "eslint";

const ESLINT_MODULES_CONFIG = {
  name: "modules",
  files: ["modules/**/*.module.ts"],
  rules: { "import/no-default-export": "off" },
} satisfies Linter.Config;

export { ESLINT_MODULES_CONFIG };