import { useCallback, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = useCallback((key: string, path?: string): string => {
    let translation = translations[language as Language];
    
    if (path) {
      const keys = path.split('.');
      for (const k of keys) {
        translation = translation[k as keyof typeof translation] as any;
      }
    }
    
    return translation[key as keyof typeof translation] as string;
  }, [language]);

  return { t };
};