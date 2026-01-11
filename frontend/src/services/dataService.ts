// frontend/src/services/dataService.ts
import { apiRequest, ApiResponse } from '../utils/api';

export interface DataItem {
  id: number;
  name: string;
  description: string;
}

export interface DataResponse {
  message: string;
  data: DataItem[];
}

export async function fetchData(): Promise<ApiResponse<DataResponse>> {
  return apiRequest<DataResponse>('/api/data');
}