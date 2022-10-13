import { useI18n } from "vue-i18n";

interface Period {
  month: number;
  year: number;
}

interface DatesComposable {
  getMonthFullName: (date: Date) => string;
  getMonthsDifference: (from: Date, to: Date) => number;
  getPeriod: (from: Date, to: Date) => Period;
}

function useDates(): DatesComposable {
  const { locale } = useI18n();

  const getMonthFullName = (date: Date): string => {
    const { format } = new Intl.DateTimeFormat(locale.value, { month: "long" });
    return format(date);
  };
  const getMonthsDifference = (from: Date, to: Date): number => {
    const monthCountInYear = 12;
    return to.getMonth() - from.getMonth() + monthCountInYear * (to.getFullYear() - from.getFullYear());
  };
  const getPeriod = (from: Date, to: Date): Period => {
    const firstMonth = 1;
    const monthsInYear = 12;
    let month = getMonthsDifference(from, to) + firstMonth;
    const year = Math.floor(month / monthsInYear);
    month -= year * monthsInYear;
    return { year, month };
  };
  return { getMonthFullName, getMonthsDifference, getPeriod };
}

export { useDates };