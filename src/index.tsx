import React from 'react';
import { render } from 'react-dom';
import Provider from '@/Provider';
import App from './router';
import 'antd/dist/antd.less';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
