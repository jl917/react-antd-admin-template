import { QueryFunctionContext } from 'react-query';
import axios from '@/common/utils/axios';
import { API_URL_TODO } from '@/common/constants/env';

export const getTodo = (context: QueryFunctionContext) => {
  return axios({ url: `${API_URL_TODO}todos/${context.queryKey[1]}` });
}
