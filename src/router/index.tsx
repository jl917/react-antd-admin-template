import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Loader from './Loader';

// const routes = window.VAR_ROUTES;
// console.log(routes);
const Apage = Loader('aaa');
const DashboardPage = Loader('dashboard');
const FormPage = Loader('form');
const NetworkPage = Loader('network');
const SamplePage = Loader('sample');
const QueryPage = Loader('query');

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="network" element={<NetworkPage />} />
      <Route path="sample" element={<SamplePage />} />
      <Route path="query" element={<QueryPage />} />
      <Route path="aaa" element={<Apage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
