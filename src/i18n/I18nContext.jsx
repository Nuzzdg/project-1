import { createContext, useContext, useEffect, useState } from 'react';
import { LANGUAGES, TRANSLATIONS } from './translations.js';

const STORAGE_KEY = 'tpc-lang';
const I18nContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch {
    /* storage unavailable */
  }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t]);

  return <I18nContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
