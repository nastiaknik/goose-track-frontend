import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import en from "./en/en.json";
import ua from "./ua/ua.json";
import pl from "./pl/pl.json";
import es from "./es/es.json";

export const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
  pl: {
    translation: pl,
  },
  es: {
    translation: es,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .init({
    debug: false,
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
      cache: ["localStorage"],
    },
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
