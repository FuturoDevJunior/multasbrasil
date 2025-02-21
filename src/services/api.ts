import axios from 'axios';
import type { ViolationData } from '../types';

const api = axios.create({
  baseURL: 'https://api.github.com/repos/APIBrasil/api-multas/contents/db',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  timeout: 10000, // 10 seconds timeout
});

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

export const fetchViolations = async (plate: string): Promise<ViolationData> => {
  try {
    const response = await api.get(`/${plate}.json`);
    const content = JSON.parse(atob(response.data.content));
    
    if (!isViolationData(content)) {
      throw new ApiError('INVALID_DATA', 'The server returned an invalid data format');
    }
    
    return content;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new ApiError('NOT_FOUND', 'No violations found', 404);
      }
      if (error.code === 'ECONNABORTED') {
        throw new ApiError('TIMEOUT', 'The request timed out', 408);
      }
      if (error.response?.status === 403) {
        throw new ApiError('RATE_LIMIT', 'Rate limit exceeded', 403);
      }
      throw new ApiError('NETWORK_ERROR', error.message, error.response?.status);
    }
    if (error instanceof SyntaxError) {
      throw new ApiError('INVALID_RESPONSE', 'Invalid response format');
    }
    throw new ApiError('GENERIC_ERROR', 'An unexpected error occurred');
  }
};