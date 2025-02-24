import { beforeAll, expect } from "vitest";
import matchers from "jest-extended";

import { mockNuxtImports } from "@tests/unit/utils/helpers/mock.helpers";

process.env.TZ = "UTC";

expect.extend(matchers);

beforeAll(() => {
  const dateForUnitTests = new Date("2022-01-01");
  vi.setSystemTime(dateForUnitTests);

  mockNuxtImports();
});