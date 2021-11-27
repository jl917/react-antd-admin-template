import { atom } from 'recoil';

const atomEnv = atom({
  key: 'env',
  default: {
    DB_HOST: import.meta.env.VITE_DB_HOST,
  },
});

export default atomEnv;
