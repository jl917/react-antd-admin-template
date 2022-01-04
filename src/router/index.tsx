import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = window.ROUTES;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {Object.entries(routes).map(([path, elementPath]) => (
        <Route path={path} key={path} element={Loader(elementPath)} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
