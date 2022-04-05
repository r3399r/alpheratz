import { init, use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { Language } from 'src/constant/Language';

// load translation using http
use(Backend);
// detect user language
use(LanguageDetector);
// pass the i18n instance to react-i18next.
use(initReactI18next);
// init i18next
init({
  // language to use if translations in user language are not available
  fallbackLng: Language.English,
  // array of allowed languages
  supportedLngs: Object.values(Language),
  // namespaces to load
  ns: ['app'],
  // default namespace used if not passed to translation function
  defaultNS: 'app',
  // not needed for react as it escapes by default
  interpolation: {
    escapeValue: false,
  },
  // options for react
  react: {
    // if using suspense or not
    useSuspense: false,
  },
  // options for backend plugin
  backend: {
    backends: [HttpApi],
    backendOptions: [
      {
        // path where resources get loaded from
        loadPath: `/locale/{{lng}}/{{ns}}.json`,
      },
    ],
  },
});

export const getLanguage = (lang: Language) => {
  switch (lang) {
    case Language.English:
      return 'English';
    case Language.TraditionalChinese:
      return '繁體中文';
  }
};
