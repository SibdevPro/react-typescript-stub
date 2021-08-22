import axios from 'axios';

import { API_URL } from 'src/constants';
import { getToken, hasToken, removeToken } from 'src/utils';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

agent.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      removeToken();
    }

    return Promise.reject(error);
  }
);

agent.interceptors.request.use((config) => {
  const updatedConfig = { ...config };

  if (hasToken()) {
    updatedConfig.headers.Authorization = `Bearer ${getToken()}`;
  }

  // Подстановка "/" в конце строки запроса (для Safari)
  if (
    updatedConfig.url &&
    !updatedConfig.url.includes('?') &&
    updatedConfig.url[updatedConfig.url.length - 1] !== '/'
  ) {
    updatedConfig.url += '/';
  }

  return updatedConfig;
});

export default agent;
