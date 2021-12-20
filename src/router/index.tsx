import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Main from '@/components/main';

// const routes = window.VAR_ROUTES;
// console.log(routes);

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
