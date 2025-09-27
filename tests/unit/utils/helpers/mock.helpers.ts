import { mockNuxtImport } from "@nuxt/test-utils/runtime";

import { createFakeI18n } from "@tests/unit/utils/factories/composables/i18n/useI18n.factory";

function mockNuxtImports(): void {
  mockNuxtImport<typeof useHead>("useHead", () => vi.fn());

  mockNuxtImport<typeof defineOgImageComponent>("defineOgImageComponent", () => vi.fn());

  mockNuxtImport<() => ReturnType<typeof createFakeI18n>>("useI18n", () => vi.fn(() => createFakeI18n()));
}

export {
  mockNuxtImports,
};