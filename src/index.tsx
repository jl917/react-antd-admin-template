import React from 'react';
import { render } from 'react-dom';
import Provider from '@/provider';
import App from './router';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
