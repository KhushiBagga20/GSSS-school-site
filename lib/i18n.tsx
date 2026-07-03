'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import type { Language } from '@/types';
import en from '@/locales/en.json';
import hi from '@/locales/hi.json';

const translations = { en, hi } as const;

type DeepKeyOf<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? Prefix extends ''
          ? DeepKeyOf<T[K], K>
          : DeepKeyOf<T[K], `${Prefix}.${K}`>
        : never;
    }[keyof T]
  : Prefix;

type TranslationKey = DeepKeyOf<typeof en>;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('gsss-lang') as Language | null;
    if (stored === 'en' || stored === 'hi') {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('gsss-lang', newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = translations[lang];
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Fallback to English
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let fallback: any = translations.en;
          for (const fk of keys) {
            fallback = fallback?.[fk];
          }
          return typeof fallback === 'string' ? fallback : key;
        }
      }
      return typeof value === 'string' ? value : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
