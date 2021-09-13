import React from 'react';
import { Button } from 'antd';
import axios from '@/common/utils/axios';

const PageNetwork = () => {
  const getUrl = async () => {
    const result = await axios.get('https://randomuser.me/api/');
    console.log(result);
  };

  const getUrl2 = async () => {
    const result = await axios.get('https://randomuser.me/api/err');
    console.log(result);
  };
  return (
    <div>
      <Button onClick={getUrl}>success</Button>
      <Button onClick={getUrl2}>error</Button>
    </div>
  );
};

export default PageNetwork;
