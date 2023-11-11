import axios, { AxiosRequestConfig } from "axios";
import { storageService } from ".";

const main = axios.create({
  // baseURL: 'http://103.179.57.30/api/',
  baseURL:
    "http://localhost/fullstack-wijaya-wedding-github-amin/backend/web/api/",
  // baseURL: 'https://api.parkuy.com/api/',
});

main.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    const userToken = storageService.getToken() || "";
    // const head = {
    //   Token: userToken,
    // };
    config.headers = {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      Token: userToken,
      // Origin: "http://localhost:3000",
      // userToken,
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default main;
