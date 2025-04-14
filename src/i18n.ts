import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ruLocales from "./locales/ru/translation.json";
import enLocales from "./locales/en/translation.json";
import { getNavigatorLanguage } from "./utils";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: getNavigatorLanguage(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enLocales,
      },
      ru: {
        translation: ruLocales,
      },
    },
  });

export default i18n;
