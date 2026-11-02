import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import fr from './locales/fr.json'

const SUPPORTED = ['fr', 'en']

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
}

/** Saved choice first, then the browser language, then French (main audience). */
const detectLanguage = () => {
  try {
    const saved = localStorage.getItem('language')
    if (SUPPORTED.includes(saved)) return saved
  } catch {
    // Storage unavailable: fall through to browser language
  }
  const browser = (navigator.language || 'fr').slice(0, 2)
  return SUPPORTED.includes(browser) ? browser : 'fr'
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: 'fr',
    supportedLngs: SUPPORTED,
    interpolation: {
      escapeValue: false
    }
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng)
})
document.documentElement.setAttribute('lang', i18n.resolvedLanguage)

export default i18n
