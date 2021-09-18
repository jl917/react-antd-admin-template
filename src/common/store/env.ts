import { atom } from 'recoil';

const atomEnv = atom({
  key: 'env',
  default: {
    DB_HOST: process.env.DB_HOST,
  },
});

export default atomEnv;
