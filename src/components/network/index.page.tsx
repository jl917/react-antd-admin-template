import React from 'react';
import axios from '@/common/utils/axios';
import * as ENV from '@/common/constants/env';

const PageNetwork = () => {
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
        <button onClick={getUrl} type="button">
          success
        </button>
        <button onClick={getUrl2} type="button">
          error
        </button>
        <button onClick={throwError} type="button">
          throw error
        </button>
      </div>
    </>
  );
};

export default PageNetwork;
