import { useCallback } from 'react';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const t = useCallback((key: string): string => {
    return translations.pt[key as keyof typeof translations.pt] as string;
  }, []);

  return { t };
};