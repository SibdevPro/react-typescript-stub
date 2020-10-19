import axios from 'axios';
import { API_URL } from './constants';

const HTTP = axios.create({ baseURL: API_URL });

HTTP.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      window.console.error(error.toString());
    }
    if (status === 401) {
      window.console.log('logout');
    }
    return Promise.reject(error);
  }
);

export default HTTP;
