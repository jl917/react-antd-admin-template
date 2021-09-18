import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from 'antd';
import axios from '@/common/utils/axios';
import atomEnv from '@/common/store/env';

const PageNetwork = () => {
  const ENV = useRecoilValue(atomEnv);
  const getUrl = async () => {
    const result = await axios.get('https://randomuser.me/api/');
    console.log(result);
  };

  const getUrl2 = async () => {
    const result = await axios.get('https://randomuser.me/api/err');
    console.log(result);
  };
  return (
    <>
      <div>env: {ENV.DB_HOST}</div>
      <div>
        <Button onClick={getUrl}>success</Button>
        <Button onClick={getUrl2}>error</Button>
      </div>
    </>
  );
};

export default PageNetwork;
