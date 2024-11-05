export class ApiInstance {
  private readonly baseURL: string;
  private readonly defaultOptions: RequestInit;

  constructor(baseURL: string, defaultOptions: RequestInit = {}) {
    this.baseURL = baseURL;
    this.defaultOptions = defaultOptions;
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<{ data: T | null; error?: string | null }> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...this.defaultOptions,
        ...options,
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} - ${response.statusText}`
        );
      }

      const data: T = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}
