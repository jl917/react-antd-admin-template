import axios from '@/common/utils/axios';

export const getPosts = () => {
  return axios({ url: 'http://localhost:9999/posts' });
};

export const addPost: any = (data: any, a: any) => {
  return axios({ url: 'http://localhost:9999/add', method: 'post', data, });
};
