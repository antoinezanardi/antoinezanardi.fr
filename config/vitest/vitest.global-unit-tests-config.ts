import { fileURLToPath } from "url";

import { defineVitestConfig } from "@nuxt/test-utils/config";

import { TEST_NUXT_RUNTIME_CONFIG } from "../../tests/unit/utils/constants/nuxt-test.constants";

export default defineVitestConfig({
  test: {
    pool: "threads",
    root: fileURLToPath(new URL("../../", import.meta.url)),
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("../../", import.meta.url)),
        overrides: {
          runtimeConfig: TEST_NUXT_RUNTIME_CONFIG,
        },
      },
    },
    fakeTimers: {
      toFake: ["Date"],
    },
    globalSetup: "./tests/unit/setup/global-unit-setup.ts",
    setupFiles: ["./tests/unit/setup/unit-setup.ts"],
    watch: false,
    include: ["./tests/unit/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      exclude: [
        "nuxt.config.ts",
        "tests/**/*",
        "node_modules/**/*",
        "config/**/*",
        "app/plugins/**/*",
        "**/*.types.ts",
        "**/*.constants.ts",
      ],
      include: [
        "app/*.vue",
        "app/**/*.{vue,ts}",
      ],
      reportsDirectory: "./tests/unit/coverage",
      reporter: [
        "clover",
        "json",
        "lcov",
        "text",
        "text-summary",
        "html",
      ],
      all: true,
      thresholds: {
        100: true,
      },
    },
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
  },
});