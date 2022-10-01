import { createI18n } from "vue-i18n";
import { defineNuxtPlugin } from "#imports";
import en from "~/locales/en.json";
import fr from "~/locales/fr.json";

enum LANGUAGES {
  FRENCH = "fr",
  ENGLISH = "en",
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: LANGUAGES.FRENCH,
  messages: {
    [LANGUAGES.FRENCH]: fr,
    [LANGUAGES.ENGLISH]: en,
  },
});

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(i18n);
});