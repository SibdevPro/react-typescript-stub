import { AxiosResponse } from 'axios';

import axios from './axios';

const timeout = 60000;

export default {
  POST<T = object, R = any>(path: string, data?: T) {
    return axios.post(`${path}/`, data, { timeout }) as Promise<AxiosResponse<R>>;
  },

  PUT<T = object, R = any>(path: string, data?: T) {
    return axios.put(`${path}/`, data, { timeout }) as Promise<AxiosResponse<R>>;
  },

  PATCH<T = object, R = any>(path: string, data?: T) {
    return axios.patch(`${path}/`, data, { timeout }) as Promise<AxiosResponse<R>>;
  },

  GET<T = object, R = any>(path: string, params?: T) {
    return axios.get(`${path}`, {
      params,
      timeout,
    }) as Promise<AxiosResponse<R>>;
  },
};
