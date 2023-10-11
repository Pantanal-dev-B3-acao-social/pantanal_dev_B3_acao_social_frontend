import axios, { AxiosInstance, AxiosResponse } from "axios";

const getConfigAxiosNoAuth: any = (): any => {
  const env: any = environmentVariables();
  const baseUrlRequest = `${env.methodHttp}://${env.baseUrl}:${env.backendPort}/${env.versionApi}`;
  const config: any = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    params: {},
    baseURL: baseUrlRequest,
  };
  return config;
};

export const environmentVariables: any = (): any => {
  const environment = {
    baseUrl: process.env.BACKEND_BASE_URL || "localhost",
    versionApi: process.env.BACKEND_API_VERSION || "v1",
    typeEnviroment: process.env.TYPE_ENVIROMENT || "DEVELOPMENT",
    methodHttp: process.env.BACKEND_METHOD_HTTP || "http",
    backendPort: process.env.BACKEND_PORT || "3001",
    frontendPort: process.env.FRONTEND_PORT || "3000",
  };
  return environment;
};

export const clientNoAuth: AxiosInstance = axios.create(getConfigAxiosNoAuth());
