import { mockNuxtImport } from "@nuxt/test-utils/runtime";

import { TEST_NUXT_SITE_CONFIG } from "@tests/unit/utils/constants/nuxt-test.constants";
import { createFakeI18n } from "@tests/unit/utils/factories/composables/i18n/useI18n.factory";

function mockNuxtImports(): void {
  mockNuxtImport<typeof useHead>("useHead", () => vi.fn());

  mockNuxtImport<typeof defineOgImageComponent>("defineOgImageComponent", () => vi.fn());

  mockNuxtImport<typeof useSchemaOrg>("useSchemaOrg", () => vi.fn());

  mockNuxtImport<() => ReturnType<typeof createFakeI18n>>("useI18n", () => vi.fn(() => createFakeI18n()));

  mockNuxtImport<() => ReturnType<typeof useSiteConfig>>("useSiteConfig", () => vi.fn(() => ({
    url: TEST_NUXT_SITE_CONFIG.url,
    name: TEST_NUXT_SITE_CONFIG.name,
  })));
}

export {
  mockNuxtImports,
};