import i18n, { ResourceLanguage } from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import vi from './vi'
import jp from './jp'

const resources = {
  en,

  vi,

  jp,
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})
