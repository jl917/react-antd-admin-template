import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './router';
import 'antd/dist/antd.less';

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('app'),
);
