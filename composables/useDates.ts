import { useI18n } from "vue-i18n";

interface DatesComposable {
  getMonthFullName: (date: Date) => string;
  getMonthsDifference: (from: Date, to: Date) => number;
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
  return { getMonthFullName, getMonthsDifference };
}

export { useDates };