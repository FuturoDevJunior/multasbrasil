import axios from 'axios';
import type { ViolationData } from '../types';

const api = axios.create({
  baseURL: 'https://api.github.com/repos/APIBrasil/api-multas/contents/db',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export class ApiError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export const fetchViolations = async (plate: string): Promise<ViolationData> => {
  try {
    const response = await api.get(`/${plate}.json`);
    const content = JSON.parse(atob(response.data.content));
    return content;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new ApiError('NOT_FOUND');
      }
    }
    throw new ApiError('GENERIC_ERROR');
  }
};