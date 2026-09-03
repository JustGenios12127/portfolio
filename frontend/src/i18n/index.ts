import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import ru from './locales/ru'

export const languages = ['ru', 'en'] as const

export type Language = (typeof languages)[number]

const STORAGE_KEY = 'portfolio-language'

function isLanguage(value: string | null): value is Language {
  return value === 'ru' || value === 'en'
}

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) {
    return stored
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'ru',
  supportedLngs: languages,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  window.localStorage.setItem(STORAGE_KEY, language)
})

document.documentElement.lang = i18n.language

export default i18n
