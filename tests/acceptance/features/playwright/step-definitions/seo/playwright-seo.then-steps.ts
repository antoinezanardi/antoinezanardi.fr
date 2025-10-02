import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import type { CustomWorld } from "@tests/acceptance/shared/types/word.types";

Then(/^the page should have JSON-LD structured data$/u, async function(this: CustomWorld): Promise<void> {
  const jsonLdHandle = await this.page.$("script[type=\"application/ld+json\"]");

  expect(jsonLdHandle).not.toBeNull();
});