import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import eng from './src/locales/en/translation.json'
import ptg from './src/locales/pt/translation.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translationsNS'],
  defaultNS: 'translationsNS',

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: { translationsNS: eng }, pt: { translationsNS: ptg } },
})

export default i18n
