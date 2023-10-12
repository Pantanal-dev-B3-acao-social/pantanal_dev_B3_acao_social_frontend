import axios, { AxiosInstance, AxiosResponse } from "axios";

export const getAuthUserLogged: any = (): any => {
  try {
    const token = localStorage.getItem("authUserLogged");
    let authUserLogged: any = {};
    console.log("getAuthUserLogged localStorage.getItem('authUserLogged')");
    console.log(token);
    console.log("00000");
    if (token) {
      console.log("token:::000");
      // authUserLogged = JSON.parse(token);
      authUserLogged = token;
      console.log("authUserLogged:::", authUserLogged);
    }
    console.log("authUserLogged::::", authUserLogged);
    console.log("1");
    if (!authUserLogged) {
      console.log("2");
      window.location.href = "/login";
    }
    console.log("3");
    let jwtUser = "";
    // if (authUserLogged && authUserLogged.authenticationToken) {
    //   jwtUser = authUserLogged.authenticationToken;
    // }
    // console.log("jwtUser:::");
    // console.log(jwtUser);
    console.log(token);
    // return jwtUser;
    return token;
  } catch (error: any) {
    console.log("deu erro no axios with auth");
    console.log(error);
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
  }
};

const getConfigAxiosWithAuth: any = (): any => {
  console.log("getConfigAxiosWithAuth");
  const jwt: any = getAuthUserLogged();
  console.log("getConfigAxiosWithAuth jwtUser:::");
  console.log(jwt);
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
  console.log(config);

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

export const clientWithAuth: AxiosInstance = axios.create(
  getConfigAxiosWithAuth()
);

clientWithAuth.interceptors.request.use(
  (config) => {
    // Aqui você pode definir o token de autorização, como um token JWT, por exemplo.
    const token: any = getAuthUserLogged();
    console.log("axios.interceptors.request", token);
    // Certifique-se de que o token está disponível antes de adicionar ao cabeçalho
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(
        "config.headers['Authorization']",
        config.headers["Authorization"]
      );
    }
    console.log("interceptors config");
    console.log(config);
    if (config.url === "/auth/login") {
      delete config.headers["Authorization"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

console.log("axios-with-auth-config.ts");
