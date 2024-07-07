import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
// Change request data/error here
Axios.interceptors.request.use((config) => {
  const token = Cookies.get("AUTH_TOKEN");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

// Change response data/error here
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      Cookies.remove("AUTH_TOKEN");
      Router.reload();
    }
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }

  static formatSearchParams(params: Partial<any>) {
    return Object.entries(params)
      .filter(([, value]) => Boolean(value))
      .map(([k, v]) => `${k}:${v}`)
      .join(";");
  }
}
