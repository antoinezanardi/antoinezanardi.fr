import fr from "@modules/i18n/locales/fr.json";
import en from "@modules/i18n/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    fr,
    en,
  },
}));