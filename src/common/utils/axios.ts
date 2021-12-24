import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
    alert('Request Error');
    // notification.error({
    //   message: 'error',
    //   description: 'Request Error',
    // });
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
    alert(`${error.response.data}(Detail see devTool)`);

    // notification.error({
    //   message: error.response.status,
    //   description: ,
    // });
    return Promise.reject(error);
  },
);

export default instance;
