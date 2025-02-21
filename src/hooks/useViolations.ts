import { useState, useCallback } from 'react';
import { useTranslation } from './useTranslation';
import { fetchViolations } from '../services/api';
import { isValidPlate, formatPlate } from '../utils/validators';
import type { ViolationData } from '../types';

interface UseViolationsReturn {
  data: ViolationData | null;
  loading: boolean;
  error: string;
  searchViolations: (plate: string) => Promise<void>;
}

export function useViolations(): UseViolationsReturn {
  const { t } = useTranslation();
  const [data, setData] = useState<ViolationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchViolations = useCallback(async (plate: string) => {
    const formattedPlate = formatPlate(plate);
    
    if (!isValidPlate(formattedPlate)) {
      setError(t('error.invalidPlate'));
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    try {
      const violationData = await fetchViolations(formattedPlate);
      setData(violationData);
    } catch (err) {
      if (err instanceof Error) {
        setError(t(`error.${err.message === 'NOT_FOUND' ? 'notFound' : 'generic'}`));
      }
    } finally {
      setLoading(false);
    }
  }, [t]);

  return {
    data,
    loading,
    error,
    searchViolations
  };
}