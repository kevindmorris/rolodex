import axios, { AxiosRequestConfig } from "axios";

export class Axios {
  _axios;

  constructor(additional_headers = {}, additional_options = {}) {
    let headers = { ...additional_headers };
    this._axios = axios.create(headers);
  }

  get(a0: string, a1: AxiosRequestConfig<any> | undefined) {
    return this._axios.get(a0, a1);
  }
  post(a0: string, a1: any, a2: AxiosRequestConfig<any> | undefined) {
    return this._axios.post(a0, a1, a2);
  }
  patch(a0: string, a1: any, a2: AxiosRequestConfig<any> | undefined) {
    return this._axios.patch(a0, a1, a2);
  }
  put(a0: string, a1: any, a2: AxiosRequestConfig<any> | undefined) {
    return this._axios.put(a0, a1, a2);
  }
  delete(a0: string, a1: AxiosRequestConfig<any> | undefined) {
    return this._axios.delete(a0, a1);
  }
}
