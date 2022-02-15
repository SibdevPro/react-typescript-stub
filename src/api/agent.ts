import axios from 'axios';

import { API_URL } from 'src/shared/constants';
import { getAccessToken, removeTokens } from 'src/shared/lib';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

agent.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      removeTokens();
    }

    return Promise.reject(error);
  }
);

agent.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers = { ...config.headers };
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  // Подстановка "/" в конце строки запроса (для Safari)
  if (config.url && !config.url.includes('?') && config.url[config.url.length - 1] !== '/') {
    config.url += '/';
  }

  return config;
});

export { agent };
