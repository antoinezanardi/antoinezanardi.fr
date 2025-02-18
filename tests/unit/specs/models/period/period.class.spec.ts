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

    it("should set month and year properties when there are 25 months.", () => {
      const period = new Period(new Date("2022-01-01"), new Date("2024-02-01"));

      expect(period.month).toBe(2);
      expect(period.year).toBe(2);
    });

    it("should set only year property when there are 12 months.", () => {
      const period = new Period(new Date("2022-01-01"), new Date("2022-12-31"));

      expect(period.month).toBe(0);
      expect(period.year).toBe(1);
    });

    it("should set only month property when there are 4 months.", () => {
      const period = new Period(new Date("2022-12-24"), new Date("2023-03-24"));

      expect(period.month).toBe(4);
      expect(period.year).toBe(0);
    });
  });
});