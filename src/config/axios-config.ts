import axios, { AxiosInstance, AxiosResponse } from "axios";

export const getAuthUserLogged: any = (): any => {
  try {
    const authUserLogged: any = JSON.parse(
      localStorage.getItem("authUserLogged") || "{}"
    );
    let jwtUser = "";
    if (authUserLogged && authUserLogged.authenticationToken) {
      jwtUser = authUserLogged.authenticationToken;
    }
    return jwtUser;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
  }
};

const getConfigAxios: any = (): any => {
  const jwt: any = getAuthUserLogged();
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

  if (jwt) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwt}`,
    };
  }

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

export const client: AxiosInstance = axios.create(getConfigAxios());

export async function verifyTokenValid() {
  try {
    const authenticationToken = getAuthUserLogged();
    if (!authenticationToken) {
      return false;
    }
    const instanceAxios: AxiosInstance = client;
    const response: AxiosResponse<any, any> = await instanceAxios.get(
      `/user/tokenvalid`
    );
    const tokenValid: any = response.data || false;
    return tokenValid;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      console.log("Erro 401 - não autorizado");
    } else {
      console.log("Erro ao verificar token:", error.message);
    }
    return false;
  }
}
