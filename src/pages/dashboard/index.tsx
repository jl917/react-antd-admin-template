import React from 'react';
import { Button } from 'antd';
import axios from '@/common/utils/axios';

const PageDashboard = () => {
  const getUrl = async () => {
    const result = await axios.get('https://randomuser.me/api/');
    console.log(result);
  };
  return (
    <div>
      <Button onClick={getUrl}>get</Button>
    </div>
  );
};

export default PageDashboard;
