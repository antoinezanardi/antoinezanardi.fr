import { fileURLToPath } from "url";

import type { ITestCaseHookParameter } from "@cucumber/cucumber";
import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { createPage, createTest } from "@nuxt/test-utils/e2e";

import { I18N_TEST_LOCALE } from "@modules/i18n/i18n.constants";
import { generateScreenshotOnScenarioFailure, removeAcceptanceTestsReportsScreenshotsDirectory } from "@tests/acceptance/features/support/helpers/hooks.helpers";
import type { CustomWorld } from "@tests/acceptance/shared/types/word.types";
import { TEST_NUXT_RUNTIME_CONFIG } from "@tests/unit/utils/constants/nuxt-test.constants";

const { beforeEach, afterEach, afterAll, beforeAll } = createTest({
  runner: "cucumber",
  server: true,
  env: {
    NUXT_PUBLIC_ADDRESS: TEST_NUXT_RUNTIME_CONFIG.public.address,
    NUXT_PUBLIC_EMAIL: TEST_NUXT_RUNTIME_CONFIG.public.email,
    NUXT_PUBLIC_PHONE_NUMBER: TEST_NUXT_RUNTIME_CONFIG.public.phoneNumber,
    NUXT_SITE_NAME: "Antoine ZANARDI - Portfolio Test",
    NUXT_SITE_URL: "https://test.antoinezanardi.fr",
    NUXT_SITE_ENV: "production",
  },
  browserOptions: {
    type: "chromium",
    launch: {
      headless: true,
      ignoreDefaultArgs: ["--hide-scrollbars"],
    },
  },
  rootDir: fileURLToPath(new URL("../../../..", import.meta.url)),
  nuxtConfig: {
    i18n: {
      defaultLocale: I18N_TEST_LOCALE,
      skipSettingLocaleOnNavigate: true,
      locales: [{ code: "fr", language: "fr-FR" }],
    },
    runtimeConfig: TEST_NUXT_RUNTIME_CONFIG,
  },
});

const beforeAllTimeout = 360000;

const beforeTimeout = 10000;

BeforeAll({ timeout: beforeAllTimeout }, async(): Promise<void> => {
  removeAcceptanceTestsReportsScreenshotsDirectory();
  await beforeAll();
});

Before({ timeout: beforeTimeout }, async function(this: CustomWorld): Promise<void> {
  beforeEach();
  this.page = await createPage();
  this.context = this.page.context();
});

After({}, async function(this: CustomWorld, scenario: ITestCaseHookParameter): Promise<void> {
  afterEach();
  if (scenario.result?.status === Status.FAILED) {
    await generateScreenshotOnScenarioFailure(this, scenario);
  }
  await Promise.all([
    this.page.close(),
    this.context.close(),
  ]);
});

AfterAll(async(): Promise<void> => {
  await afterAll();
});