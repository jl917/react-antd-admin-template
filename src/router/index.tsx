import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = window.VAR_ROUTES;
console.log(routes);

const Apage = Loader('aaa');
const DashboardPage = Loader('dashboard/index');
const FormPage = Loader('form/index');
const NetworkPage = Loader('network/index');
const SamplePage = Loader('sample/index');

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<DashboardPage />} />
        <Route path="aaa" element={<Apage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="sample" element={<SamplePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
