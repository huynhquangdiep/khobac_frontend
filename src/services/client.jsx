import qs from "qs";
import axios from "axios";
import { toast } from "react-hot-toast";

const config = {
  baseApiUrl: import.meta.env.VITE_PUBLIC_BASE_API_URL || ""
};

const isServer = typeof window === "undefined";

const service = axios.create({
  baseURL: config.baseApiUrl,
  timeout: 30 * 1000,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
  withCredentials: true
});

service.interceptors.request.use(
  (axiosConfig) => {
    axiosConfig.headers = {
      ...axiosConfig.headers,
      "ngrok-skip-browser-warning": "true"
    };
    axiosConfig.withCredentials = false;

    return axiosConfig;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (!error.response) {
      return await Promise.reject(new Error("Can not get response"));
    }
    const { status } = error.response;

    if (status === 500) {
      if (!isServer) {
        toast.error("message.something-went-wrong");
      }
    }

    return await Promise.reject(error.response);
  }
);

export default service;
