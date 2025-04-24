import type { Linter } from "eslint";

const ESLINT_CUCUMBER_CONFIG = {
  name: "cucumber-files",
  files: ["tests/acceptance/**/*.ts"],
  rules: {
    "func-names": "off",
    "new-cap": ["error", { capIsNewExceptions: ["BeforeAll", "AfterAll", "Before", "After", "Given", "When", "Then"] }],
    "no-await-in-loop": "off",
    "no-console": ["error", { allow: ["error", "info"] }],
    "@typescript-eslint/max-params": "off",
    "import/no-internal-modules": "off",
  },
} satisfies Linter.Config;

export { ESLINT_CUCUMBER_CONFIG };