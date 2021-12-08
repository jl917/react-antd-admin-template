import axios from 'axios';
import { notification } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './__.css';

const instance = axios.create({
  baseURL: '/',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// preRequest
instance.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    notification.error({
      message: 'error',
      description: 'Request Error',
    });
    return Promise.reject(error);
  },
);

// preResponse
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    notification.error({
      message: error.response.status,
      description: `${error.response.data}(Detail see devTool)`,
    });
    return Promise.reject(error);
  },
);

export default instance;
