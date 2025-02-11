import { Period } from "~/models/period/period.class";

describe("Period Class", () => {
  describe("constructor", () => {
    it("should set month and year properties when there are only 2 months.", () => {
      const period = new Period(new Date("2022-01-01"), new Date("2022-02-01"));

      expect(period.month).toBe(2);
      expect(period.year).toBe(0);
    });

    it("should set month and year properties when there are 13 months.", () => {
      const period = new Period(new Date("2022-01-01"), new Date("2023-02-01"));

      expect(period.month).toBe(2);
      expect(period.year).toBe(1);
    });
  });
});