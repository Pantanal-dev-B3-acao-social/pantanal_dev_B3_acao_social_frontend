// import { JsonSchema } from "@jsonforms/core";
import { AxiosError, AxiosResponse } from "axios";
import { clientWithAuth } from "../config/axios-with-auth-config";

export interface FormApi {
  // getSchema: () => Promise<JsonSchema>;
  get: (id: number) => Promise<any>;
  getAll: () => Promise<any>;
  put: (id: number, data: any) => Promise<any>;
  post: (data: any) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

export class GenericApi implements FormApi {
  constructor(private readonly url: string) {}

  // async getSchema(): Promise<JsonSchema> {
  //   const response = await clientWithAuth.get<JsonSchema>(`${this.url}/schema`);
  //   return response.data;
  // }

  async get(id: number): Promise<any> {
    const response = await clientWithAuth.get<any>(`${this.url}/${id}`);
    return response.data;
  }

  async getAll(): Promise<any> {
    console.log("getAll clientWithAuth");
    console.log(clientWithAuth);
    try {
      const response: AxiosResponse<any, any> = await clientWithAuth.get<any>(
        `${this.url}`
      );
      return response?.data?.data;
    } catch (error: AxiosError | any) {
      console.log("Erro na solicitação Axios:", error.message); // Mensagem de erro
      console.log("Configuração da solicitação:", error.config); // Configuração da solicitação
      console.log("Status da resposta:", error.response?.status); // Status da resposta, se disponível
      console.log("Dados da resposta:", error.response?.data); // Dados da resposta, se disponível

      console.log(error);
    }
  }

  async put(id: number, data: any): Promise<any> {
    const response = await clientWithAuth.put<any>(`${this.url}/${id}`, data);
    return response;
  }

  async post(data: any): Promise<any> {
    const response = await clientWithAuth.post<any>(`${this.url}`, data);
    return response;
  }

  async delete(id: number): Promise<any> {
    const response = await clientWithAuth.delete<any>(`${this.url}/${id}`);
    return response;
  }
}

export const makeApi = (url: string) => {
  return new GenericApi(url);
};
