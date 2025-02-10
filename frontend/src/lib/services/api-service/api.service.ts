import { HttpMethod } from '@/lib/enums';

class ApiService {
  private apiUrl: string;
  private authToken: string | null;

  constructor(
    apiUrl: string = process.env.NEXT_PUBLIC_API_URL || '',
    authToken: string | null = process.env.NEXT_PUBLIC_API_AUTH_TOKEN || null,
  ) {
    this.apiUrl = apiUrl;
    this.authToken = authToken;
  }

  private getHeaders(contentType: string = 'application/json'): HeadersInit {
    if (!this.authToken) {
      throw new Error('API Auth Token is not defined');
    }

    return {
      'Content-Type': contentType,
      Authorization: `Bearer ${this.authToken}`,
    };
  }

  private async fetchFromApi<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    if (!this.authToken) {
      throw new Error('API Auth Token is not defined');
    }

    const response = await fetch(`${this.apiUrl}/api/${endpoint}`, {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${endpoint}: ${response.statusText}`,
      );
    }

    const { data }: { data: T } = await response.json();
    return data;
  }

  public async fetchAll<T>(endpoint: string): Promise<T[]> {
    const data = await this.fetchFromApi<T[]>(`${endpoint}?populate=*`);
    return data ?? [];
  }

  public async fetchOne<T>(endpoint: string, id: string): Promise<T> {
    const data = await this.fetchFromApi<T>(`${endpoint}`);
    if (!data) {
      throw new Error(
        `Resource with ID ${id} not found at endpoint ${endpoint}`,
      );
    }
    return data;
  }

  public async create<T>(endpoint: string, body: T): Promise<T | null> {
    return this.fetchFromApi<T>(endpoint, {
      method: HttpMethod.POST,
      body: JSON.stringify(body),
    });
  }

  public async update<T>(
    endpoint: string,
    id: string,
    body: Partial<T>,
  ): Promise<T | null> {
    return this.fetchFromApi<T>(`${endpoint}/${id}`, {
      method: HttpMethod.PUT,
      body: JSON.stringify(body),
    });
  }

  public async delete(endpoint: string, id: string): Promise<boolean> {
    const response = await fetch(`${this.apiUrl}/api/${endpoint}/${id}`, {
      method: HttpMethod.DELETE,
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete resource with ID ${id} at endpoint ${endpoint}: ${response.statusText}`,
      );
    }

    return true;
  }
}

export default ApiService;
