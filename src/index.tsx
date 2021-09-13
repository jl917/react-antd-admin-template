import React from 'react';
import { render } from 'react-dom';
import App from './router';
import ProviderApi from './Provider/ProviderApi';
import 'antd/dist/antd.less';

render(
  <ProviderApi>
    <App />
  </ProviderApi>,
  document.getElementById('app'),
);
