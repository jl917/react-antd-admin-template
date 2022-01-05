import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = __ROUTES__;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={Loader('dashboard/index.page.tsx')} />
      {Object.entries(routes).map(([path, elementPath]) => (
        <Route path={path} key={path} element={Loader(elementPath as string)} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
