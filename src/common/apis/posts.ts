import axios from '@/common/utils/axios';
import { API_URL_TODO } from '@/common/constants/env';

export const getPosts = () => {
  return axios({ url: `${API_URL_TODO}posts` });
};

export const addPost: any = (data: any) => {
  return axios({ url: `${API_URL_TODO}posts`, method: 'post', data });
};
