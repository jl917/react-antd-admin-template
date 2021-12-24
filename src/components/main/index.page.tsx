import React from 'react';
import { useLocation } from 'react-router-dom';

const PageMain = () => {
  const location = useLocation();
  console.log(location);
  return <div>main page</div>;
};

export default PageMain;
