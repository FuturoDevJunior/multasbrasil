import type { ViolationData } from '../types';
import { getMockViolations } from './mockData';

export class ApiError extends Error {
  constructor(message: string, public code?: string, public statusCode?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const isViolationData = (data: any): data is ViolationData => {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.placa === 'string' &&
    typeof data.chassi === 'string' &&
    typeof data.renavam === 'string' &&
    Array.isArray(data.multas) &&
    data.multas.every((multa: any) =>
      typeof multa === 'object' &&
      multa !== null &&
      typeof multa.orgao === 'string' &&
      typeof multa.descricao === 'string' &&
      typeof multa.valor === 'string' &&
      typeof multa.data === 'string' &&
      typeof multa.status === 'string'
    )
  );
};

// Simple in-memory cache
const cache = new Map<string, { data: ViolationData; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const fetchViolations = async (plate: string): Promise<ViolationData> => {
  // Check cache first
  const cached = cache.get(plate);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const content = await getMockViolations(plate);
    
    if (!isViolationData(content)) {
      throw new ApiError('INVALID_DATA', 'The data format is invalid');
    }
    
    // Cache the result
    cache.set(plate, { data: content, timestamp: Date.now() });
    return content;
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'NOT_FOUND') {
      throw new ApiError('NOT_FOUND');
    }
    throw new ApiError('UNKNOWN_ERROR');
  }
};