import { isObject } from "radash";
import type { Mock } from "vitest";

import type { Ref } from "#imports";
import { ref } from "#imports";
import fr from "@modules/i18n/locales/fr.json";

type MockedI18n = {
  locale: Ref<"fr">;
  messages: Ref<{
    fr: typeof fr;
  }>;
  t: Mock;
};

function createFakeI18n(i18n: Partial<MockedI18n> = {}): MockedI18n {
  return {
    locale: ref("fr"),
    messages: ref({
      fr,
    }),
    t: vi.fn((...args: unknown[]) => args.map(arg => (isObject(arg) ? JSON.stringify(arg) : arg)).join(", ")),
    ...i18n,
  };
}

export { createFakeI18n };