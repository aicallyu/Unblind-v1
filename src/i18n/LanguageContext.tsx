import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, Translations, translations } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL path for language prefix
    const path = window.location.pathname
    if (path.startsWith('/de')) return 'de'
    if (path.startsWith('/es')) return 'es'

    // Check localStorage
    const saved = localStorage.getItem('unblind-language') as Language
    if (saved && ['en', 'de', 'es'].includes(saved)) return saved

    // Check browser language
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'de') return 'de'
    if (browserLang === 'es') return 'es'

    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('unblind-language', language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
