import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const modules = import.meta.glob('../components/**/*.page.tsx'); // 무조건 string

const routes = Object.keys(modules).reduce((m: any, p: string) => {
  let entry = p.replace('../components', '');
  const endFixPage = '.page.tsx';
  if (entry.endsWith(endFixPage)) {
    entry = entry.slice(0, -9);
  }
  m[entry] = modules[p];

  const endFixIndex = '/index';
  if (entry.endsWith(endFixIndex)) {
    entry = entry.slice(0, -5);
  }
  m[entry] = modules[p];
  return m;
}, {});

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={Loader(() => import('../components/dashboard/index.page'))} />
      {Object.entries(routes).map(([path, page]) => (
        <Route path={path} key={path} element={Loader(page)} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
