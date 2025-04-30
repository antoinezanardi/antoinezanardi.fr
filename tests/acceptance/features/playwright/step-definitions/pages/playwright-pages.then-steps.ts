import AxeBuilder from "@axe-core/playwright";
import type { DataTable } from "@cucumber/cucumber";
import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { waitForPageUrl } from "@tests/acceptance/features/playwright/helpers/pages/playwright-pages.given-steps-helper";
import type { CustomWorld } from "@tests/acceptance/shared/types/word.types";

Then(/^the user should be on (?<page>.+) page$/u, async function(this: CustomWorld, page: string): Promise<void> {
  const pageName = page === "home" ? "" : page;
  await waitForPageUrl(this, `/${pageName}`);
});

Then(/^a new page should be opened with url starting with "(?<url>.+)"$/u, async function(this: CustomWorld, fullUrl: string): Promise<void> {
  const newPage = await this.newPagePromise;
  const regexp = new RegExp(`^${fullUrl}`, "u");

  await expect(newPage).toHaveURL(regexp);
});

Then(/^the page should have head title "(?<title>.+)"$/u, async function(this: CustomWorld, title: string): Promise<void> {
  await expect(this.page).toHaveTitle(title);
});

Then(/^the page should have head title "(?<title>.+)" and meta tags$/u, async function(this: CustomWorld, title: string, metaTagsDatable: DataTable): Promise<void> {
  await expect(this.page).toHaveTitle(title);

  const assertions: Promise<void>[] = [];
  for (const [attribute, content] of metaTagsDatable.rows()) {
    const metaTag = this.page.locator(`head > meta[name="${attribute}"]`);
    assertions.push(expect(metaTag).toHaveAttribute("content", content));
  }
  await Promise.all(assertions);
});

Then(/^the page should not contain accessibility issues in (?<mode>desktop|mobile) mode$/u, async function(this: CustomWorld, mode: string): Promise<void> {
  const viewport = mode === "desktop" ? { width: 1920, height: 800 } : { width: 375, height: 667 };
  await this.page.setViewportSize(viewport);
  const tags = ["wcag***", "best-practice", "cat.*", "ACT"];
  const accessibilityScanResults = await new AxeBuilder({ page: this.page }).setLegacyMode().withTags(tags).analyze();
  if (accessibilityScanResults.violations.length > 0) {
    const jsonSpace = 2;
    const formattedResults = JSON.stringify(accessibilityScanResults.violations, null, jsonSpace);
    console.error("Accessibility violations found: ", formattedResults);
  }

  expect(accessibilityScanResults.violations).toHaveLength(0);
});