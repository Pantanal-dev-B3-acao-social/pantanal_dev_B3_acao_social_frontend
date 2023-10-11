import axios from 'axios';

// export const getAuthTokenUserLogged = (): string => {
//   try {
//     let jwtUser = '';
//     const authUserLogged = getAuthUserLogged();
//     if (authUserLogged && authUserLogged.authenticationToken) {
//       jwtUser = authUserLogged.authenticationToken;
//     }
//     return jwtUser;
//   } catch (error: any) {
//     if (error.response && error.response.status === 401) {
//       window.location.href = '/login';
//     } 
//     return '';
//   }
// }

export const getAuthUserLogged = (): string => {
  try {
    let authUserLogged: string = "";
    if (localStorage.getItem('auth')){
      authUserLogged = JSON.parse(localStorage.getItem('auth')!);
    }
    console.log("Error do token mal formado", authUserLogged);
    return authUserLogged;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    } 
    console.log("Error 2 do token mal formado");

    return "Not";
  }
}

export const client = axios.create({  
  baseURL: process.env.REACT_APP_API_BASE_ADDR,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthUserLogged()}`
  },
});
