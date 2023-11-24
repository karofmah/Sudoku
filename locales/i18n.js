import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import no from './no.json'
const resources = {
  en: {
    translation: en,
  },
  no: {
    translation: no,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'no',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false
  }
});