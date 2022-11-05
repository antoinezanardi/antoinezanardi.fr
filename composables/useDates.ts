import { useI18n } from "vue-i18n";

interface DatesComposable {
  getMonthFullName: (date: Date) => string;
}

function useDates(): DatesComposable {
  const { locale } = useI18n();

  const getMonthFullName = (date: Date): string => {
    const { format } = new Intl.DateTimeFormat(locale.value, { month: "long" });
    return format(date);
  };
  return { getMonthFullName };
}

export { useDates };