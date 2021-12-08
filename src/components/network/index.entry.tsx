import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from 'antd';
import axios from '@/common/utils/axios';
import atomEnv from '@/common/store/env';

const PageNetwork = () => {
  const ENV = useRecoilValue(atomEnv);
  console.log(ENV);
  const getUrl = async () => {
    const result = await axios.get('https://randomuser.me/api/');
    console.log(result);
  };

  const getUrl2 = async () => {
    const result = await axios.get('https://randomuser.me/api/err');
    console.log(result);
  };

  const throwError = () => {
    // eslint-disable-next-line
    throw 'sentry error test';
  };
  return (
    <>
      <div>env: {ENV.DB_HOST}</div>
      {JSON.stringify(import.meta.env)}
      <div>
        <Button onClick={getUrl}>success</Button>
        <Button onClick={getUrl2}>error</Button>
        <Button onClick={throwError}>throw error</Button>
      </div>
    </>
  );
};

export default PageNetwork;
