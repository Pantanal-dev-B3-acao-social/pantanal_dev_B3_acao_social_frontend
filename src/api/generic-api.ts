// import { JsonSchema } from "@jsonforms/core";
import { AxiosError, AxiosResponse } from "axios";
import { instanceAxios } from "../config/axios-config";
import { forEach } from "lodash";

export interface FormApi {
  // getSchema: () => Promise<JsonSchema>;
  get: (id: number) => Promise<any>;
  getAll: () => Promise<any>;
  patch: (id: number, data: any) => Promise<any>;
  post: (data: any) => Promise<any>;
  delete: (id: number) => Promise<any>;
}

export class GenericApi implements FormApi {
  constructor(private readonly url: string) { }

  async get(id: number): Promise<any> {
    const response = await instanceAxios.get<any>(`${this.url}/${id}`);
    return response.data;
  }

  async getAll(): Promise<any> {
    try {
      const response: AxiosResponse<any, any> = await instanceAxios.get<any>(
        `${this.url}`
      );
      // let result = { content: [] };
      let result: any[] = [];
      response?.data?.content.forEach((item: any) => {
        const details = {
          createdBy: item.createdBy,
          createdDate: item.createdDate,
          lastModifiedBy: item.lastModifiedBy,
          lastModifiedDate: item.lastModifiedDate,
          deletedBy: item.deletedBy,
          deletedDate: item.deletedDate,
        };
        delete item.createdBy;
        delete item.createdDate;
        delete item.lastModifiedBy;
        delete item.lastModifiedDate;
        delete item.deletedBy;
        delete item.deletedDate;
        const itemStructured = { ...item, details: details };
        result.push(itemStructured);
      });
      // console.log(result)
      // console.log(response?.data?.content);
      return result;
      // return response?.data?.content;
    } catch (error: AxiosError | any) {
      console.log("Erro na solicitação Axios:", error.message); // Mensagem de erro
      console.log("Configuração da solicitação:", error.config); // Configuração da solicitação
      console.log("Status da resposta:", error.response?.status); // Status da resposta, se disponível
      console.log("Dados da resposta:", error.response?.data); // Dados da resposta, se disponível
      console.log(error);
    }
  }

  async patch(id: number, data: any): Promise<any> {
    const response = await instanceAxios.patch<any>(`${this.url}/${id}`, data);
    return response;
  }

  async post(data: any): Promise<any> {
    const response = await instanceAxios.post<any>(`${this.url}`, data);
    return response;
  }

  async delete(id: number): Promise<any> {
    const response = await instanceAxios.delete<any>(`${this.url}/${id}`);
    return response;
  }
}

export const makeApi = (url: string) => {
  return new GenericApi(url);
};
