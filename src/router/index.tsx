import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

import PageDashboard from '@/components/dashboard/index.page';
import PageNetwork from '@/components/network';

const routes = __ROUTES__;

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route index element={Loader('../components/dashboard/index.page.tsx')} /> */}
      {/* {Object.entries(routes).map(([path, elementPath]) => (
        <Route path={path} key={path} element={Loader(elementPath)} />
      ))} */}
      <Route index element={<PageDashboard />} />
      <Route path="network" element={<PageNetwork />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
