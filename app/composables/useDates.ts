import { useI18n } from "#imports";

type DatesComposable = {
  getMonthFullName: (date: Date) => string;
};

function useDates(): DatesComposable {
  const { locale } = useI18n();

  const getMonthFullName = (date: Date): string => {
    const dateTimeFormat = new Intl.DateTimeFormat(locale.value, { month: "long" });

    return dateTimeFormat.format(date);
  };
  return { getMonthFullName };
}

export { useDates };