import axios, { AxiosInstance, AxiosResponse } from "axios";

export const getAuthUserLogged: any = (): any => {
  try {
    const token = localStorage.getItem("authUserLogged");
    let authUserLogged: any = {};
    if (token) {
      // authUserLogged = JSON.parse(token);
      authUserLogged = token;
    }

    if (!authUserLogged) {
      window.location.href = "/login";
    }
    // jwtUser = ""
    // if (authUserLogged && authUserLogged.authenticationToken) {
    //   jwtUser = authUserLogged.authenticationToken;
    // }

    // return jwtUser;
    return token;
  } catch (error: any) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
  }
};

const getConfigAxiosWithAuth: any = (): any => {
  const jwt: any = getAuthUserLogged();
  const env: any = environmentVariables();
  const baseUrlRequest = `${env.methodHttp}://${env.baseUrl}:${env.backendPort}/${env.versionApi}`;

  const config = {
    headers: {
      // Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
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

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${getAuthUserLogged()}`;

export const instanceAxios: AxiosInstance = axios.create(
  getConfigAxiosWithAuth()
);

instanceAxios.interceptors.request.use(
  (config) => {
    // Aqui você pode definir o token de autorização, como um token JWT, por exemplo.
    const token: any = getAuthUserLogged();
    // Certifique-se de que o token está disponível antes de adicionar ao cabeçalho
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (config.url === "/auth/login") {
      delete config.headers["Authorization"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
