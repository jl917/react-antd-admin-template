import axios from '@/common/utils/axios';
import { API_URL_USER } from '@/common/constants/env';

export const getUser = () => axios({ url: API_URL_USER });

export const getUser404 = () => axios({ url: 'https://randomuser213.me/api/' });
