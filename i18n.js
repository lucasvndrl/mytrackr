import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RNLocalize from 'react-native-localize'

import en from './src/locales/en/translation.json'
import pt from './src/locales/pt/translation.json'

const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales()
  if (Array.isArray(locales)) {
    return locales[0].languageCode
  }
  console.log(locales)
  return 'en'
}

const initializeLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('language')
    if (savedLanguage) {
      return savedLanguage
    }

    const deviceLanguage = getDeviceLanguage()
    await AsyncStorage.setItem('language', deviceLanguage)
    return deviceLanguage
  } catch (error) {
    console.error('Error initializing language:', error)
    return 'en'
  }
}

const setupI18n = async () => {
  const language = await initializeLanguage()

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
}

setupI18n()

export default i18n
