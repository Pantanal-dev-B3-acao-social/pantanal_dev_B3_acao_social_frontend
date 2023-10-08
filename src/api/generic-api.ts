import { JsonSchema } from "@jsonforms/core";
import { client } from "../config/axios-config";

export interface FormApi {
  getSchema: () => Promise<JsonSchema>;
  get: (id: number) => Promise<any>;
  getAll: () => Promise<any>;
  put: (id: number, data: any) => Promise<any>;
  post: (data: any) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

export class GenericApi implements FormApi {
  constructor(private readonly url: string) {}

  async getSchema(): Promise<JsonSchema> {
    const response = await client.get<JsonSchema>(`${this.url}/schema`);
    return response.data;
  }

  async get(id: number): Promise<any> {
    const response = await client.get<any>(`${this.url}/${id}`);
    return response.data;
  }

  async getAll(): Promise<any> {
    const response = await client.get<any>(`${this.url}`);
    return response?.data?.data;
  }

  async put(id:number, data: any): Promise<any> {
    const response = await client.put<any>(`${this.url}/${id}`, data);
    return response;
  }

  async post(data: any): Promise<any> {
    const response = await client.post<any>(`${this.url}`, data);
    return response;
  }

  async delete(id:number): Promise<any> {
    const response = await client.delete<any>(`${this.url}/${id}`);
    return response;
  }
}

export const makeApi = (url: string) => {
  return new GenericApi(url);
}
