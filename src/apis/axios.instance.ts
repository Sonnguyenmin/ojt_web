// import axios from "axios";

// (axios as any).defaults.headers = {
//   "lng": localStorage.getItem("lng") ?? "en",
//   "token": String(localStorage.getItem("token"))
// };

// axios.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axios;
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

console.log("Starting");
const baseURL = import.meta.env.VITE_BASE_URL;

export const jsonAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//

export const formAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const handleAddInterceptors = (instance: AxiosInstance) => {
  // request
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // const cookies = new Cookies();

      const data = JSON.parse(Cookies.get("token") || "null");

      // console.log("data = " + data);
      if (data) {
        config.headers.Authorization = `Bearer ${data.data.accessToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
  // response
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error.response);
    }
  );
};

handleAddInterceptors(jsonAxios);
handleAddInterceptors(formAxios);
