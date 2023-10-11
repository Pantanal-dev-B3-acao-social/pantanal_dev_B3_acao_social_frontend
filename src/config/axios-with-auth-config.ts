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
    console.log("jwtUser:::");
    console.log(jwtUser);

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
  const config: any = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${jwt}`,
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

export async function verifyTokenValid() {
  try {
    const authenticationToken = getAuthUserLogged();
    if (!authenticationToken) {
      return false;
    }
    const instanceAxios: AxiosInstance = clientWithAuth;
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
console.log("axios-with-auth-config.ts");
export const clientWithAuth: AxiosInstance = axios.create(
  getConfigAxiosWithAuth()
);
