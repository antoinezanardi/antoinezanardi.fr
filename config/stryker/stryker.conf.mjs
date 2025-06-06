export default {
  cleanTempDir: "always",
  incremental: true,
  incrementalFile: "tests/stryker/incremental/incremental.json",
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  testRunner: "vitest",
  ignoreStatic: true,
  mutate: [
    "app/App.vue",
    "app/**/*.{ts,vue}",
    "!app/utils/**/*.constants.ts",
    "!app/plugins/**/*.ts",
  ],
  plugins: [
    "@stryker-mutator/vitest-runner",
    "@stryker-mutator/typescript-checker",
    "./config/stryker/plugins/stryker-define-props-ignorer-plugin.mjs",
    "./config/stryker/plugins/stryker-define-emits-ignorer-plugin.mjs",
    "./config/stryker/plugins/stryker-define-page-meta-ignorer-plugin.mjs",
    "./config/stryker/plugins/stryker-define-model-ignorer-plugin.mjs",
    "./config/stryker/plugins/stryker-define-expose-ignorer-plugin.mjs",
  ],
  ignorers: [
    "defineProps",
    "defineEmits",
    "definePageMeta",
    "defineModel",
    "defineExpose",
  ],
  ignorePatterns: [
    "!.nuxt/",
    ".github/",
    ".husky/",
    ".output/",
    ".run/",
    ".idea/",
    "dist/",
    "config/commitlint",
    "config/cucumber",
    "config/eslint",
    "config/lint-staged",
    "config/stryker",
    "tests/acceptance",
    "tests/stryker",
    "tests/unit/coverage",
    "scripts/",
    "server/",
    ".editorconfig",
    ".npmrc",
    ".nvmrc",
    "release.config.mjs",
    ".DS_Store",
    ".validate-branch-namerc.json",
    "CHANGELOG.md",
    "LICENSE",
    "pnpm-lock.yaml",
    "sonar-project.properties",
    "README.md",
  ],
  vitest: { configFile: "config/vitest/vitest.global-unit-tests-config.ts" },
  reporters: ["clear-text", "progress", "html", "json"],
  htmlReporter: { fileName: "tests/stryker/coverage/index.html" },
  jsonReporter: { fileName: "tests/stryker/coverage/mutation.json" },
  thresholds: {
    high: 100,
    low: 100,
    break: 100,
  },
  dryRunTimeoutMinutes: 10,
  disableTypeChecks: true,
};