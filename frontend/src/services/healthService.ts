// frontend/src/services/healthService.ts
import { apiRequest, ApiResponse } from '../utils/api';

export interface HealthStatus {
  status: string;
  timestamp: string;
  version?: string;
}

export async function checkHealth(): Promise<ApiResponse<HealthStatus>> {
  return apiRequest<HealthStatus>('/health');
}