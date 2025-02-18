import { useDates } from "~/composables/useDates";

describe("Use Dates Composable", () => {
  describe("getMonthFullName", () => {
    it("should return the full month name when called.", () => {
      const date = new Date("2021-01-01");
      const expectedMonthFullName = "janvier";
      const { getMonthFullName } = useDates();
      const result = getMonthFullName(date);

      expect(result).toBe(expectedMonthFullName);
    });
  });
});