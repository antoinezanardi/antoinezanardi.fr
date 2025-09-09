import { defineI18nConfig } from "#imports";
import fr from "@modules/i18n/locales/fr.json";
import en from "@modules/i18n/locales/en.json";

export default defineI18nConfig(() => ({
  legacy: false,
  warnHtmlMessage: false,
  warnHtmlInMessage: "off",
  locale: "fr",
  messages: {
    fr,
    en,
  },
}));