class Period {
  public month: number;

  public year: number;

  public constructor(from: Date, to: Date) {
    const firstMonth = 1;
    const monthsInYear = 12;
    this.month = Period.getMonthsDifference(from, to) + firstMonth;
    this.year = Math.floor(this.month / monthsInYear);
    this.month -= this.year * monthsInYear;
  }

  public static getMonthsDifference(from: Date, to: Date): number {
    const monthCountInYear = 12;

    return to.getMonth() - from.getMonth() + monthCountInYear * (to.getFullYear() - from.getFullYear());
  }
}

export { Period };