import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = window.VAR_ROUTES;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={Loader('dashboard')} />
        {routes.map((path: string) => (
          <Route path={path} element={Loader(path)} key={path} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
