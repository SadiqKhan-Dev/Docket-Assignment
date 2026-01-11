// frontend/src/utils/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    // Handle non-JSON responses or empty responses
    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // If not JSON, return text or empty object
      data = response.status === 204 ? {} : await response.text();
    }

    if (!response.ok) {
      return {
        error: data.error || `HTTP error! status: ${response.status}`,
        status: response.status,
      };
    }

    return {
      data,
      status: response.status,
    };
  } catch (error: any) {
    // Handle network errors, CORS issues, etc.
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        error: 'Network error: Unable to connect to the server',
        status: 0,
      };
    }

    return {
      error: error.message || 'An unexpected error occurred',
      status: 0,
    };
  }
}

export default apiRequest;