import { When } from "@cucumber/cucumber";

import type { CustomWorld } from "@tests/acceptance/shared/types/word.types";

When(/^the user moves his mouse away$/u, async function(this: CustomWorld): Promise<void> {
  await this.page.mouse.move(-1, -1);
});

When(/^the user scrolls to the element with data-test id "(?<dataTestId>.+)"$/u, async function(this: CustomWorld, dataTestId: string): Promise<void> {
  const element = this.page.getByTestId(dataTestId);
  await element.scrollIntoViewIfNeeded();
});