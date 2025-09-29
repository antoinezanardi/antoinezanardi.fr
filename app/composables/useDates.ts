import { useI18n } from "#imports";

type DatesComposable = {
  getMonthFullName: (date: Date) => string;
  birthDate: string;
};

function useDates(): DatesComposable {
  const { locale } = useI18n();

  const getMonthFullName = (date: Date): string => {
    const dateTimeFormat = new Intl.DateTimeFormat(locale.value, { month: "long" });

    return dateTimeFormat.format(date);
  };
  return {
    birthDate: "1996-04-14",
    getMonthFullName,
  };
}

export { useDates };